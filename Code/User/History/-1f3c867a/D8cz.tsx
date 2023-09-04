import React from "react"
import { Box, Tooltip } from "@mui/material"
import { UserAvatar } from "../Admin/Stats/StatusLogs"

interface UsersToolipProps {
    users: User[]
    children: React.ReactElement
}

export const UsersToolip: React.FC<UsersToolipProps> = ({ children, users }) => {
    return (
        <Tooltip
            placement="right-start"
            enterDelay={0}
            title={
                <Box sx={{ flexDirection: "column" }}>
                    {users.map((user) => (
                        <UserAvatar user={user} />
                    ))}
                </Box>
            }
        >
            {children}
        </Tooltip>
    )
}
