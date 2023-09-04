import { Box } from "@mui/material"
import { TableColumn } from "react-data-table-component"

const calculateMinutesDifference = (start: string, end: string): number => {
    const startDate = new Date(start)
    const endDate = new Date(end)
    return (endDate.getTime() - startDate.getTime()) / 1000 / 60
}

export const buildWorkedHours = (logs: StatusLog[]) => {
    const groupedByDay = logs.reduce<Record<string, StatusLog[]>>((acc, item) => {
        const date = new Date(item.datetime).getDate()
        acc[date] = acc[date] || []
        acc[date].push(item)
        return acc
    }, {})

    // If you want the result to be an array of arrays
    const days = Object.values(groupedByDay)

    const connectedTimes = days.map((logs) => {
        // Reduce the logs to calculate the total connected time
        const totalMinutes = logs.reduce((acc, log, index, arr) => {
            // Consider statuses 1, 2, and 3 as connected
            if (log.status === 0 || index === 0) return acc

            // Find the next disconnected status to calculate the connected duration
            const nextDisconnected = arr.slice(index).find((item) => item.status === 0)
            if (nextDisconnected) {
                acc += calculateMinutesDifference(log.datetime, nextDisconnected.datetime)
            }
            return acc
        }, 0)

        return { date: logs[0].datetime, minutes: totalMinutes }
    })

    const columns: TableColumn<{
        date: string
        minutes: number
    }>[] = [
        {
            name: "Data",
            selector: (row) => row.date,
            sortable: true,
            cell: (row) => <Box>{new Date(row.date).toLocaleDateString("pt-br")}</Box>,
            width: "5vw",
        },
        {
            name: "Minutos",
            selector: (row) => row.minutes,
            sortable: true,
            cell: (row) => <Box>{row.minutes}</Box>,
            width: "5vw",
        },
    ]
}
