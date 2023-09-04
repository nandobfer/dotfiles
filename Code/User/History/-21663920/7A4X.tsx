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
        logs.sort((a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime())
        let totalMinutes = 0
        let connectedStartTime: Date | null = null

        logs.forEach((log, index) => {
            // If the status is connected, meeting, or pause, and it's the start of a connected period
            if ((log.status === 1 || log.status === 2 || log.status === 3) && !connectedStartTime) {
                connectedStartTime = new Date(log.datetime)
            }

            // If the status is disconnected or it's the last log, and there was a connected start time
            if ((log.status === 0 || index === logs.length - 1) && connectedStartTime) {
                const endTime = new Date(log.datetime)
                totalMinutes += (endTime.getTime() - connectedStartTime.getTime()) / 1000 / 60
                connectedStartTime = null
            }
        })

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

    return { data: connectedTimes, columns }
}
