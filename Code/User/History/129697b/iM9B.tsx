import React from "react"
import { Box, MenuItem, Paper } from "@mui/material"
import { useCustomers } from "../../../hooks/useCustomers"

interface CustomerListProps {}

export const CustomerList: React.FC<CustomerListProps> = ({}) => {
    const { customers } = useCustomers()

    return (
        <Paper sx={{ bgcolor: "background.default", flexDirection: "column", padding: "1vw" }}>
            <p>Clientes</p>
            {customers.map((customer) => (
                <MenuItem key={customer.id}>{customer.name}</MenuItem>
            ))}
        </Paper>
    )
}
