import { Avatar, Box, IconButton, Paper } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useHeader } from "../hooks/useHeader"
import { Header } from "../components/Header"
import { BottomNavigation } from "../components/BottomNavigation"
import { ContentProfile } from "../components/ContentProfile"

interface ProfileProps {
    user: User
}

export const Profile: React.FC<ProfileProps> = ({ user }) => {
    const header = useHeader()

    useEffect(() => {
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
