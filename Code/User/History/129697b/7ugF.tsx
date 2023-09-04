import React from "react"
import { Box, MenuItem, Paper, Switch } from "@mui/material"
import { useCustomers } from "../../../hooks/useCustomers"
import { Tag } from "../../../components/Tag"
import { useApi } from "../../../hooks/useApi"

interface CustomerListProps {}

export const CustomerList: React.FC<CustomerListProps> = ({}) => {
    const api = useApi()
    const { customers } = useCustomers()

    const toggleCustomerStatus = (customer: Customer) => {
        api.customer.toggleStatus({
            data: customer,
            callback: () => {},
        })
    }

    return (
        <Paper sx={{ bgcolor: "background.default", flexDirection: "column", padding: "1vw", gap: "1vw" }}>
            <p>Clientes</p>
            <Box sx={{ flexDirection: "column" }}>
                {customers.map((customer) => (
                    <MenuItem key={customer.id}>
                        <p>{customer.name}</p>
                        <Box sx={{ alignItems: "center", marginLeft: "auto", gap: "0.5vw" }}>
                            {customer.services.map((service) => (
                                <Tag name={service.tag} fontSize="0.8vw" />
                            ))}
                            <Switch checked={customer.active} onChange={() => toggleCustomerStatus(customer)} />
                        </Box>
                    </MenuItem>
                ))}
            </Box>
        </Paper>
    )
}
