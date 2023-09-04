import React from "react"
import { Box } from "@mui/material"

interface UserCardProps {
    user: User
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <Box sx={{}}>
            <p>{user.name}</p>
        </Box>
    )
}
