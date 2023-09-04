import React from "react"
import { Box } from "@mui/material"
import { backgroundStyle } from "../../../style/background"

interface StatsProps {
    user: User
}

export const Stats: React.FC<StatsProps> = ({ user }) => {
    return <Box sx={backgroundStyle}>oi</Box>
}
