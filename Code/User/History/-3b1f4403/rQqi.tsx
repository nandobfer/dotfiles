import React from "react"
import { Box } from "@mui/material"
import { useColors } from "../../hooks/useColors"

interface ForgotProps {}

export const Forgot: React.FC<ForgotProps> = ({}) => {
    const colors = useColors()

    return (
        <Box sx={{ flexDirection: "column", backgroundColor: colors.purple }}>
            <h3>Esqueci minha senha</h3>
        </Box>
    )
}
