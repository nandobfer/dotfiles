import React from "react"
import { Box } from "@mui/material"
import { CustomerList } from "../Admin/Customers/CustomerList"

interface CustomersProps {
    user: User
}

export const Customers: React.FC<CustomersProps> = ({ user }) => {
    return (
        <Box sx={{ flexDirection: "column" }}>
            <CustomerList />
        </Box>
    )
}
