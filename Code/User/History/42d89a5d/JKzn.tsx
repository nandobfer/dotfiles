import React from "react"
import { Box } from "@mui/material"
import { Header } from "../../components/Header"

interface AdmProps {
    user: User
}

export const Adm: React.FC<AdmProps> = ({ user }) => {
    return (
        <Box sx={{ flexDirection: "column", width: "100%" }}>
            <Header />
        </Box>
    )
}
