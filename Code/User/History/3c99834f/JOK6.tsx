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
    
    const handleNavigation = () => {
        const dataToSend = "editing=true"
        navigate(`/profile`, { state: { editing: true } })
        menu.toggle()
        //console.log(dataToSend)
    }

    return user ? (
        <Box sx={{ alignItems: "center", padding: "5vw", gap: "3vw" }}>
            <Avatar
                src={user.image}
                sx={{ width: "16vw", height: "16vw" }}
                onClick={() => {
                    navigate("/profile")
                    menu.toggle()
                }}
            />
            <Box sx={{ gap: "1.6vw", flexDirection: "column" }}>
                <Box sx={{ alignItems: "center", gap: "3vw" }}>
                    <p style={{ fontWeight: "600", fontSize: "4vw" }}>{user.name}</p>
                    <p style={{ textDecoration: "underline", fontSize: "2.5vw", color: `${colors.primary}` }} onClick={handleNavigation}>
                        {" "}
                        Editar
                    </p>
                </Box>
                <Box sx={{ gap: "1vw", flexWrap: "wrap", width: "60vw" }}>
                    {user.adm && <Tag name={"ADM"} variant="adm" style={"2.8vw"} />}
                    {user.producer && <Tag name={"Produtor"} variant="producer" style={"2.8vw"} />}
                    {user.agent && <Tag name={"Corretor"} variant="agent" style={"2.8vw"} />}
                    {user.shipping && <Tag name={"Transportadora"} variant="shipping" style={"2.8vw"} />}
                    {user.business && <Tag name={"Loja"} variant="ads" style={"2.8vw"} />}
                </Box>
            </Box>
        </Box>
    ) : (
        <></>
    )
}
