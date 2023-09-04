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
        <Box
            sx={{
                flexDirection: "column",
                gap: "1vw",
                color: "primary.main",
                width: "20vw",
                borderRadius: "0.5vw",
                padding: "0.5vw",
                paddingBottom: "3vw",
            }}
        >
            <Box sx={{ fontWeight: "bold", fontSize: "1vw" }}>
                {department.name}
                <Box
                    sx={{
                        padding: "0.5vw",
                        cursor: "default",
                        borderRadius: "50%",
                        fontSize: "0.7vw",
                        minWidth: "1.5vw",
                        height: "1.5vw",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "secondary.main",
                        bgcolor: darkMode ? darken(colors.primary, 0.5) : lighten(colors.primary, 0.4),
                    }}
                >
                    {users.length}
                </Box>
            </Box>

            <Box sx={{ flexDirection: "column", bgcolor: "background.default", gap: "0.5vw", height: "100%", overflowY: "auto" }}>
                {connectedUsers.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
                {nonConnectedUsers.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </Box>
        </Box>
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
