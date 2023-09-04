import React from "react"
import { Box } from "@mui/material"
import { backgroundStyle } from "../../style/background"
import { Header } from "../../components/Header"

interface ToolsProps {
    user: User
}

export const Tools: React.FC<ToolsProps> = ({ user }) => {
    return (
        <Box sx={backgroundStyle}>
            <Header user={user} />
            <Box sx={{ padding: "2vw" }}></Box>
        </Box>
    )
}
