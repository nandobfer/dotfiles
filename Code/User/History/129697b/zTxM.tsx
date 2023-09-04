import React from "react"
import { Box, MenuItem, Paper } from "@mui/material"
import { useCustomers } from "../../../hooks/useCustomers"

interface CustomerListProps {}

export const CustomerList: React.FC<CustomerListProps> = ({}) => {
    const { customers } = useCustomers()

    return (
        <Paper sx={{ padding: "1vw", bgcolor: "background.default", flexDirection: "column" }}>
            {customers.map((customer) => (
                <MenuItem key={customer.id}>{customer.name}</MenuItem>
            ))}
        </Paper>
    )
}
