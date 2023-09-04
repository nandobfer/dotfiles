import { Box } from "@mui/material"
import { TableColumn } from "react-data-table-component"

export const buildWorkedHours = (logs: StatusLog[]) => {
    const groupedByDay = logs.reduce((acc, item) => {
        const date = item.datetime // or use date manipulation to extract only the day part
        acc[date] = acc[date] || []
        acc[date].push(item)
        return acc
    }, {})

    // If you want the result to be an array of arrays
    const arrayOfArrays = Object.values(groupedByDay)

    console.log(arrayOfArrays)

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
