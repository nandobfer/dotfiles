import React from "react"
import { Box, Paper, Skeleton } from "@mui/material"
import { useArray } from "burgos-array"
import { useUser } from "../../../hooks/useUser"
import { UserCard } from "./UserCard"

interface RoleContainerProps {
    department: Department
    users: User[]
}

export const RoleContainer: React.FC<RoleContainerProps> = ({ department, users }) => {
    const userList = users.filter((user) => user.department.id == department.id)
    const { connectedList } = useUser()

    const connectedUsers = userList.filter((user) => connectedList.map((item) => item.id).includes(user.id))
    const nonConnectedUsers = userList.filter((user) => !connectedList.map((item) => item.id).includes(user.id))

    return (
        <Paper
            sx={{
                flexDirection: "column",
                gap: "1vw",
                color: "primary.main",
                width: "20vw",
                borderBottom: "2px solid",
                borderRadius: "0.5vw",
                padding: "0.5vw",
            }}
        >
            <p style={{ fontWeight: "bold" }}>{department.name}</p>

            <Box sx={{ flexDirection: "column", bgcolor: "background.default" }}>
                {connectedUsers.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
                {nonConnectedUsers.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </Box>
        </Paper>
    )
}

export const RoleSkeletons = () => {
    const skeletons = useArray().newArray(3)

    return (
        <Box sx={{ gap: "1vw" }}>
            {skeletons.map((index) => (
                <Skeleton key={index} variant="rounded" animation="wave" sx={{ height: "50vw", width: "30vw" }} />
            ))}
        </Box>
    )
}
