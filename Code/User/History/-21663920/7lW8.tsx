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

        const pauseMinutes = logs.reduce(
            (acc, log, index) => {
                const { status, datetime } = log

                // If the status is connected, meeting, or pause
                if (status == 2) {
                    // If there's no start time, this is the beginning of a connected period
                    if (!acc.pauseStartTime) {
                        acc.pauseStartTime = new Date(datetime)
                    }
                }

                // If the status is disconnected or this is the last log
                if ((status === 1 || status === 2 || status === 3 || status === 4 || index === logs.length - 1) && acc.pauseStartTime) {
                    const endTime = new Date(datetime)
                    acc.totalMinutes += (endTime.getTime() - acc.pauseStartTime.getTime()) / 1000 / 60
                    acc.pauseStartTime = null // Reset the start time
                }

                return acc
            },
            { totalMinutes: 0, pauseStartTime: null as Date | null }
        )

        const lunchMinutes = logs.reduce(
            (acc, log, index) => {
                const { status, datetime } = log

                // If the status is connected, meeting, or pause
                if (status == 4) {
                    // If there's no start time, this is the beginning of a connected period
                    if (!acc.lunchStartTime) {
                        acc.lunchStartTime = new Date(datetime)
                    }
                }

                // If the status is disconnected or this is the last log
                if ((status === 1 || status === 2 || status === 3 || index === logs.length - 1) && acc.lunchStartTime) {
                    const endTime = new Date(datetime)
                    acc.totalMinutes += (endTime.getTime() - acc.lunchStartTime.getTime()) / 1000 / 60
                    acc.lunchStartTime = null // Reset the start time
                }

                return acc
            },
            { totalMinutes: 0, lunchStartTime: null as Date | null }
        )

        const totalMinutes = logs.reduce(
            (acc, log, index) => {
                const { status, datetime } = log

                // If the status is connected, meeting, or pause
                if (status === 1 || status === 2 || status === 3) {
                    // If there's no start time, this is the beginning of a connected period
                    if (!acc.connectedStartTime) {
                        acc.connectedStartTime = new Date(datetime)
                    }
                }

                // If the status is disconnected or this is the last log
                if ((status === 0 || status === 4 || index === logs.length - 1) && acc.connectedStartTime) {
                    const endTime = new Date(datetime)
                    acc.totalMinutes += (endTime.getTime() - acc.connectedStartTime.getTime()) / 1000 / 60
                    acc.connectedStartTime = null // Reset the start time
                }

                return acc
            },
            { totalMinutes: 0, connectedStartTime: null as Date | null }
        )

        const time = new Date()

        // Add the total connected minutes
        const lunchTime = new Date()
        time.setHours(0, 0, 0, 0)
        time.setMinutes(totalMinutes.totalMinutes)
        const formattedTime = time.toLocaleTimeString("pt-br", { hour: "2-digit", minute: "2-digit" })

        lunchTime.setHours(0, 0, 0, 0)
        lunchTime.setMinutes(lunchMinutes.totalMinutes)
        const formattedLunchTime = lunchTime.toLocaleTimeString("pt-br", { hour: "2-digit", minute: "2-digit" })

        const pauseTime = new Date()
        pauseTime.setHours(0, 0, 0, 0)
        pauseTime.setMinutes(pauseMinutes.totalMinutes)
        const formattedPauseTime = pauseTime.toLocaleTimeString("pt-br", { hour: "2-digit", minute: "2-digit" })

        return { date: logs[0].datetime, minutes: formattedTime, lunch: formattedLunchTime, pause: formattedPauseTime }
    })

    const columns: TableColumn<{
        date: string
        minutes: string
        lunch: string
        pause: string
    }>[] = [
        {
            name: "Data",
            selector: (row) => row.date,
            sortable: true,
            cell: (row) => <Box>{new Date(row.date).toLocaleDateString("pt-br")}</Box>,
            width: "5vw",
        },
        {
            name: "Horas",
            selector: (row) => row.minutes,
            sortable: true,
            cell: (row) => <Box>{row.minutes}</Box>,
            width: "5vw",
            center: true,
        },
        {
            name: "Reunião",
            selector: (row) => row.minutes,
            sortable: true,
            cell: (row) => <Box>{row.minutes}</Box>,
            width: "2vw",
            center: true,
        },
        {
            name: "Pausa",
            selector: (row) => row.pause,
            sortable: true,
            cell: (row) => <Box>{row.pause}</Box>,
            width: "5vw",
            center: true,
        },
        {
            name: "Almoço",
            selector: (row) => row.lunch,
            sortable: true,
            cell: (row) => <Box>{row.lunch}</Box>,
            width: "10vw",
            right: true,
        },
    ]

    return { data: connectedTimes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()), columns }
}
