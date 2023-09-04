import React from "react"
import { Box, Paper } from "@mui/material"
import { backgroundStyle } from "../../../style/background"
import { useUser } from "../../../hooks/useUser"

interface StatsProps {
    user: User
}

export const Stats: React.FC<StatsProps> = ({ user }) => {
    const { logs } = useUser()

    return (
        <Box sx={{ flexDirection: "column", padding: "2vw" }}>
            <Paper></Paper>
        </Box>
    )
}
