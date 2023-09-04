import React, { useEffect } from "react"
import { Box, Button, Paper } from "@mui/material"
import { useHeader } from "../../../hooks/useHeader"
import { useNavigate } from "react-router"

interface SignupProps {
    user: User
}

export const Signup: React.FC<SignupProps> = ({ user }) => {
    const header = useHeader()
    const navigate = useNavigate()

    useEffect(() => {
        header.setTitle("Meu negócio")
    }, [])

    return (
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
    )
}
