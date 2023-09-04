import React from "react"
import { Box, Button, Paper } from "@mui/material"

interface VerificationProps {}

export const Verification: React.FC<VerificationProps> = ({}) => {
    return (
        <Box sx={{ padding: "10vw", width: "100vw" }}>
            <Paper
                sx={{
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    width: "100%",
                    padding: "10vw",
                    textAlign: "center",
                    borderRadius: "5vw",
                    marginBottom: "10vw",
                }}
            >
                <p style={{ fontSize: "6vw" }}>Seu cadastro foi enviado para a TEC.AGRO!</p>
                <p style={{ fontSize: "5cw" }}>Estamos analisando seu cadastro e entraremos em contato a respeito</p>
                <Box sx={{ flexDirection: "column", gap: "2vw" }}>
                    <p>Situação</p>
                    <Button variant="outlined" sx={{ borderRadius: "5vw", pointerEvents: "none", fontWeight: "bold" }}>
                        Em análise
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}
