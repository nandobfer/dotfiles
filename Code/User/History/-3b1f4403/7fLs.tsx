import React from "react"
import { Box } from "@mui/material"
import { useColors } from "../../hooks/useColors"

interface ForgotProps {}

export const Forgot: React.FC<ForgotProps> = ({}) => {
    const colors = useColors()

    return (
        <Box sx={{ flexDirection: "column", backgroundColor: colors.purple, width: "100%", padding: "10vw", color: "white" }}>
            <h3>Esqueci minha senha</h3>
        </Box>
    )
}
