import React, { useEffect, useState } from "react"
import { Box, Paper } from "@mui/material"
import { useApi } from "../../hooks/useApi"
import { StatusCircle } from "../../components/StatusCircle"
import { QRCode } from "react-qrcode-logo"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

interface WhatsappProps {}

export const Whatsapp: React.FC<WhatsappProps> = ({}) => {
    const vw = window.innerWidth / 100
    const [qrcode, setQrcode] = useState("")
    const [loading, setLoading] = useState(false)

    const api = useApi()

    useEffect(() => {
        api.settings.whatsapp({
            callback: (response: { data: { qrcode: string } }) => {
                console.log(response.data)
                setQrcode(response.data.qrcode)
            },
        })
    }, [])

    return (
        <Box sx={{ gap: "1vw" }}>
            <h3>Whatsapp</h3>
            <p>Essa área serve para conectar um dispositivo com whatsapp com intuito de enviar informações a respeito das etapas do contrato. </p>
            <Paper sx={{ gap: "1vw", alignItems: "center" }}>
                status:
                <StatusCircle color={qrcode ? "error" : "success"} />
                {qrcode ? "desconectado" : "conectado"}
            </Paper>
            {qrcode ? (
                <Paper sx={{ justifyContent: "space-between" }}>
                    <Box sx={{ flexDirection: "column", justifyContent: "space-between" }}>
                        <h3 style={{ fontSize: "2vw" }}>Leia o QR code ao lado para conectar um whatsapp.</h3>
                        <p>1. Abra o WhatsApp no seu celular.</p>
                        <p>2. Toque em Mais opções ou Configurações e selecione Aparelhos conectados.</p>
                        <p>3. Toque em Conectar um aparelho.</p>
                        <p>4. Aponte seu celular para esta tela para capturar o QR code.</p>
                    </Box>
                    <QRCode value={qrcode} size={20 * vw} />
                </Paper>
            ) : (
                <Paper sx={{ justifyContent: "space-between" }}>
                    <h3 style={{ fontSize: "2vw" }}>Whatsapp está conectado</h3>
                    <CheckCircleIcon color="primary" sx={{ width: "20vw", height: "20vw" }} />
                </Paper>
            )}
        </Box>
    )
}
