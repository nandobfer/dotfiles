import React from "react"
import { Box, MenuItem, Paper } from "@mui/material"
import { useCustomers } from "../../../hooks/useCustomers"
import { Tag } from "../../../components/Tag"

interface CustomerListProps {}

export const CustomerList: React.FC<CustomerListProps> = ({}) => {
    const { customers } = useCustomers()

    return (
        <Paper sx={{ bgcolor: "background.default", flexDirection: "column", padding: "1vw", gap: "1vw" }}>
            <p>Clientes</p>
            <Box sx={{ flexDirection: "column" }}>
                {customers.map((customer) => (
                    <MenuItem key={customer.id}>
                        <p>{customer.name}</p>
                        <Box sx={{ alignItems: "center", marginLeft: "auto" }}>
                            {customer.services.map((service) => (
                                <Tag name={service.tag} />
                            ))}
                        </Box>
                    </MenuItem>
                ))}
            </Box>
        </Paper>
    )
}
