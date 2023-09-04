import { Avatar, Box, IconButton, Paper } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useHeader } from "../hooks/useHeader"
import { Header } from "../components/Header"
import { BottomNavigation } from "../components/BottomNavigation"
import { ContentProfile } from "../components/ContentProfile"
import { useLocation } from "react-router-dom"
import { useNavigationList } from "../hooks/useNavigationList"

interface ProfileProps {
    user: User
}
export const Profile: React.FC<ProfileProps> = ({ user }) => {
    const header = useHeader()
    const location = useLocation()
    const bottomMenu = useNavigationList()

    useEffect(() => {
        header.setTitle("Perfil")
    }, [])

    return (
        <Box sx={{ flexDirection: "column", width: "100%", height: "100%", padding: "12vh 0vw 10vh 0vw" }}>
            <Header />
            <ContentProfile user={user} editingMode={!!location.state?.editing} />
            <BottomNavigation section={bottomMenu.profile} />
        </Box>
    )
}
  