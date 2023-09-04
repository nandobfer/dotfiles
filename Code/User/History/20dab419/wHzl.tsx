import { Avatar, Box, IconButton, Paper } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useHeader } from "../hooks/useHeader"
import { Header } from "../components/Header"
import { BottomNavigation } from "../components/BottomNavigation"
import { useNavigate } from "react-router-dom"
import { useUser } from "../hooks/useUser"
import { ContentProfile } from "../components/ContentProfile"

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({}) => {
    const header = useHeader()
    const navigate = useNavigate()

    const { user } = useUser()

    useEffect(() => {
        if (!user) navigate("/login")

        header.setTitle("Perfil")
        header.updateSection("/profile")
    }, [])

    return (
        <Box sx={{ flexDirection: "column", width: "100%", height: "100%", padding: "12vh 0vw 10vh 0vw" }}>
            <Header />
            <ContentProfile user={user} />

            <BottomNavigation />
        </Box>
    )
}
