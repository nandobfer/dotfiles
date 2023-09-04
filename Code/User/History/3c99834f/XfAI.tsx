import React from "react"
import { Avatar, Box } from "@mui/material"

interface UserCardProps {
    user: User
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <Box sx={{ alignItems: "center", padding: "5vw", gap: "5vw" }}>
            <Avatar />
            <p>{user.name}</p>
        </Box>
    )
}
