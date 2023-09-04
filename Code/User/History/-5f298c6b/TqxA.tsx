import React from "react"
import { Badge, Box, MenuItem, Paper, Skeleton } from "@mui/material"
import { Avatar } from "../../../components/Avatar"
import { useNavigate } from "react-router-dom"
import { useArray } from "burgos-array"
import { Tag } from "../../../components/Tag"
import { useUser } from "../../../hooks/useUser"

interface RoleContainerProps {
    department: Department
    users: User[]
}

export const RoleContainer: React.FC<RoleContainerProps> = ({ department, users }) => {
    const navigate = useNavigate()
    const userList = users.filter((user) => user.department.id == department.id)
    const { connectedList } = useUser()

    const connectedUsers = userList.filter((user) => connectedList.includes(user))
    const nonConnectedUsers = userList.filter((user) => !connectedList.includes(user))

    return (
        <Box sx={{ flexDirection: "column", gap: "1vw", color: "primary.main", width: "30vw" }}>
            <p style={{ fontWeight: "bold" }}>{department.name}</p>

            <Paper sx={{ flexDirection: "column", bgcolor: "background.default" }}>
                {userList.map((user) => (
                    
                ))}
            </Paper>
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
