import React from "react"
import { Box, Paper } from "@mui/material"

interface UserContainerProps {
    user: User
}

export const UserContainer: React.FC<UserContainerProps> = ({ user }) => {
    return (
        <Paper sx={{ flexDirection: "column", bgcolor: "background.default" }}>
            {connectedUsers.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
            {nonConnectedUsers.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </Paper>
    )
}
