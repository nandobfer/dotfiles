import React from "react"
import { Box } from "@mui/material"
import { TableColumn } from "react-data-table-component"

interface WorkHoursTableProps {
    logs: StatusLog[]
}

export const WorkHoursTable: React.FC<WorkHoursTableProps> = ({ logs }) => {
    const columns: TableColumn<StatusLog>[] = [
        {
            name: "Status",
            selector: (row) => row.status,
            sortable: true,
            cell: (row) => <Status status={row.status} />,
            width: "10vw",
        },
        {
            name: "Horário",
            selector: (row) => row.datetime,
            sortable: true,
            cell: (row) => <Box>{new Date(row.datetime).toLocaleTimeString("pt-br", { hour: "2-digit", minute: "2-digit" })}</Box>,
            width: "6vw",
        },
        {
            name: "Data",
            selector: (row) => row.datetime,
            sortable: true,
            cell: (row) => <Box>{new Date(row.datetime).toLocaleDateString("pt-br")}</Box>,
            width: "5vw",
        },
    ]

    return <Box sx={{}}></Box>
}
