import React from "react"
import { Box } from "@mui/material"

interface CardProps {
    isEditing?: boolean
    image?: string
    name: string
    username: string
    roles: Role[]
}

export const Card: React.FC<CardProps> = ({ name, username, roles, image, isEditing }) => {
    return (
        <Box
            sx={{ width: "25%", padding: "8vw 3vw", flexDirection: "column", alignItems: "center", gap: "2vw", borderRadius: "0.2vw 0 0 2vw " }}
        ></Box>
    )
}
