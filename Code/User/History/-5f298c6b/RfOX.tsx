import React from "react"
import { Badge, Box, MenuItem, Paper, Skeleton } from "@mui/material"
import { Avatar } from "../../../components/Avatar"
import { useNavigate } from "react-router-dom"
import { useArray } from "burgos-array"

interface RoleContainerProps {
    department: Department
}

export const RoleContainer: React.FC<RoleContainerProps> = ({ department }) => {
    const navigate = useNavigate()
    return (
        <Box sx={{ flexDirection: "column", gap: "1vw", color: "primary.main", width: "30vw" }}>
            <p style={{ fontWeight: "bold" }}>{department.name}</p>

            <Badge badgeContent={department.users.length} color="primary" sx={{ width: "30vw" }}>
                <Paper sx={{ flexDirection: "column", bgcolor: "background.default" }}>
                    {department.users.map((user) => (
                        <MenuItem
                            key={user.id}
                            sx={{ alignItems: "center", gap: "1vw", color: "text.secondary" }}
                            onClick={() => {
                                navigate(`/admin/users/${user.username}`)
                            }}
                        >
                            <Avatar size={"3vw"} small user={user} />
                            <p style={{ fontWeight: "bold" }}>{user.name}</p>
                        </MenuItem>
                    ))}
                </Paper>
            </Badge>
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
