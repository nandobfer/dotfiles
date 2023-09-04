import React from "react"
import { Box, Button, Paper } from "@mui/material"

interface SignupProps {
    user: User
}

export const Signup: React.FC<SignupProps> = ({ user }) => {
    return (
        <Paper sx={{ flexDirection: "column", justifyContent: "space-evenly", width: "80vw", padding: "10vw" }}>
            <p style={{ fontSize: "10vw" }}>Você ainda não tem uma loja ou serviço cadastrado</p>
            <p style={{ fontSize: "5cw" }}>Complete seu cadastro e envie para análise para desbloquear outras funcionalidades</p>
            <Button variant="contained">Começar cadastro</Button>
        </Paper>
    )
}
