import { Box } from "@mui/material"
import { TableColumn } from "react-data-table-component"

export const buildWorkedHours = (logs: StatusLog[]) => {
    const groupedByDay = logs.reduce<Record<string, StatusLog[]>>((acc, item) => {
        const date = new Date(item.datetime).getDate()
        acc[date] = acc[date] || []
        acc[date].push(item)
        return acc
    }, {})

    // If you want the result to be an array of arrays
    const days = Object.values(groupedByDay)

    days.map((logs) => {})

    const columns: TableColumn<StatusLog>[] = [
        {
            name: "Data",
            selector: (row) => row.datetime,
            sortable: true,
            cell: (row) => <Box>{new Date(row.datetime).toLocaleDateString("pt-br")}</Box>,
            width: "5vw",
        },
    ]
}
