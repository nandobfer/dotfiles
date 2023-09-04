import React from "react"
import { Box, MenuItem } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Avatar } from "../../../components/Avatar"
import { Tag } from "../../../components/Tag"

interface UserCardProps {
    user: User
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const navigate = useNavigate()
    return (
        <MenuItem
            sx={{ alignItems: "center", gap: "0.5vw", color: "text.secondary", borderRadius: "0.5vw" }}
            onClick={() => {
                navigate(`/admin/users/${user.username}`)
            }}
        >
            <Avatar size={"3vw"} small user={user} />
            <Box sx={{ flexDirection: "column", justifyContent: "space-between", fontSize: "0.7vw", height: "100%" }}>
                <p style={{ fontWeight: "bold" }}>{user.name}</p>
                <Box sx={{ gap: "0.2vw" }}>
                    {user.roles.map((role) => (
                        <Tag
                            key={role.id}
                            name={role.tag}
                            tooltip={role.name}
                            sx={{ fontSize: "0.6vw", padding: "0.1vw 0.3vw", borderRadius: "0.75vw" }}
                        />
                    ))}
                </Box>
            </Box>
        </MenuItem>
    )
}
