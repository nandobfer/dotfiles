import React from "react"
import { Box, Paper } from "@mui/material"

interface CardProps {
    user?: User
    name: string
    username: string
    roles: Role[]
}

export const Card: React.FC<CardProps> = ({ name, username, roles, user }) => {
    return (
        <Paper
            sx={{
                width: "25%",
                padding: "8vw 3vw",
                flexDirection: "column",
                alignItems: "center",
                gap: "2vw",
                borderRadius: "0.2vw 0 0 2vw ",
                bgcolor: "background.paper",
            }}
        ></Paper>
    )
}
