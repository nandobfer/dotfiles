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
    return <Box sx={{}}></Box>
}
