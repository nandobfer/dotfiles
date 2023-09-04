import { TableColumn } from "react-data-table-component"

export const buildColumns = (logs: StatusLog[]) => {
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
