import React from "react"
import { Box } from "@mui/material"
import { backgroundStyle } from "../style/background"
import { Header } from "../components/Header"

interface ProfileProps {
    user: User
}

export const Profile: React.FC<ProfileProps> = ({ user }) => {
    return (
        <Box sx={backgroundStyle}>
            <Header user={user} disabledSearch />
        </Box>
    )
}
