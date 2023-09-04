import React from "react"
import { Avatar, Box } from "@mui/material"
import colors from "../colors"
import profile2 from "../assets/person.jpg"
import { Tag } from "./Tag"
interface UserCardProps {
    user?: User
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const color = colors

    return user ? (
        <Box sx={{ alignItems: "center", padding: "5vw", gap: "3vw" }}>
            <img src={profile2} alt="" style={{ width: "16vw", height: "16vw", borderRadius: "50%" }} />

            {/* <Avatar src={profile2} sx={{ width: "16vw", height: "16vw" }} /> */}
            <Box sx={{ gap: "1.6vw", flexDirection: "column" }}>
                <Box sx={{ alignItems: "center", gap: "3vw" }}>
                    <p style={{ fontWeight: "600", fontSize: "4vw" }}>{user.name}</p>
                    <a style={{ fontSize: "2.5vw", color: `${color.primary}` }} href="">
                        {" "}
                        Editar
                    </a>
                </Box>
                <Tag name={"Produtor"} color="#D2FFB6" />
            </Box>
        </Box>
    ) : (
        <></>
    )
}
