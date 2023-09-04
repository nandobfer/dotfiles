import React from "react"
import { Box, Paper } from "@mui/material"

interface VerificationProps {}

export const Verification: React.FC<VerificationProps> = ({}) => {
    return (
        <Box sx={{ padding: "10vw", width: "100%" }}>
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
                <p style={{ fontSize: "6vw" }}>Você ainda não tem uma loja ou serviço cadastrado</p>
                <p style={{ fontSize: "5cw" }}>Complete seu cadastro e envie para análise para desbloquear outras funcionalidades</p>
                <Button variant="contained" onClick={() => navigate("/business/form")}>
                    Começar cadastro
                </Button>
            </Paper>
        </Box>
    )
}
