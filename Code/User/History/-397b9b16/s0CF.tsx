import React from "react"
import { Box } from "@mui/material"
import { useColors } from "../hooks/useColors"

interface WildCardProps {}

export const WildCard: React.FC<WildCardProps> = ({}) => {
    const colors = useColors()

    return (
        <Box sx={{ flexDirection: "column", width: "100vw", backgroundColor: colors.purple, height: "100vh", color: "white" }}>
            <h1>404</h1>
        </Box>
    )
}
