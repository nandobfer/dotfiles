import React from "react"
import { Box } from "@mui/material"
import { CustomerList } from "../Admin/Customers/CustomerList"
import { backgroundStyle } from "../../style/background"
import { Header } from "../../components/Header"

interface CustomersProps {
    user: User
}

export const Customers: React.FC<CustomersProps> = ({ user }) => {
    return (
        <Box sx={backgroundStyle}>
            <Header user={user} />
            <CustomerList />
        </Box>
    )
}
