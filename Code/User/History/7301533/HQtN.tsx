import React from "react"
import { Box } from "@mui/material"
import { backgroundStyle } from "../../../style/background"
import { useUser } from "../../../hooks/useUser"

interface StatsProps {
    user: User
}

export const Stats: React.FC<StatsProps> = ({ user }) => {
    const { lo } = useUser()
    return <Box sx={{ flexDirection: "column", padding: "2vw" }}>oi</Box>
}
