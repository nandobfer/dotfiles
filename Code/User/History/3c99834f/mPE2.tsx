import React from "react"
import { Avatar, Box } from "@mui/material"
import colors from "../style/colors"
import profile2 from "../assets/person.jpg"
import { Tag } from "./Tag"
import { useNavigate } from "react-router-dom"
import { useMenuDrawer } from "../hooks/useMenuDrawer"
interface UserCardProps {
    user?: User
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const navigate = useNavigate()
    const menu = useMenuDrawer()

    return user ? (
        <Box sx={{ alignItems: "center", padding: "5vw", gap: "3vw" }}>
            <Avatar
                src={profile2}
                sx={{ width: "16vw", height: "16vw" }}
                onClick={() => {
                    navigate("/profile")
                    menu.toggle()
                }}
            />
            <Box sx={{ gap: "1.6vw", flexDirection: "column" }}>
                <Box sx={{ alignItems: "center", gap: "3vw" }}>
                    <p style={{ fontWeight: "600", fontSize: "4vw" }}>{user.name}</p>
                    <p style={{ textDecoration: "underline", fontSize: "2.5vw", color: `${colors.primary}` }}> Editar</p>
                </Box>
                <Tag name={"Produtor"} color="#D2FFB6" style={"2.8vw"} />
            </Box>
        </Box>
    ) : (
        <></>
    )
}
