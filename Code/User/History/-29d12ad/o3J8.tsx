import React, { useEffect, useState } from "react"
import { Box, Paper } from "@mui/material"
import { useApi } from "../../hooks/useApi"
import { StatusCircle } from "../../components/StatusCircle"
import { QRCode } from "react-qrcode-logo"

interface WhatsappProps {}

export const Whatsapp: React.FC<WhatsappProps> = ({}) => {
    const vw = window.innerWidth / 100
    const [qrcode, setQrcode] = useState("")
    const [loading, setLoading] = useState(false)

    const api = useApi()

    useEffect(() => {
        api.settings.whatsapp({
            callback: (response: { data: { qrcode: string } }) => {
                setQrcode(response.data.qrcode)
            },
        })
    }, [])

    return (
        <Box sx={{ gap: "1vw" }}>
            <h3>Whatsapp</h3>
            <Paper sx={{ gap: "1vw", alignItems: "center" }}>
                status:
                <StatusCircle color={qrcode ? "error" : "success"} />
                {qrcode ? "desconectado" : "conectado"}
            </Paper>
            {qrcode && (
                <Paper sx={{ flexDirection: "column" }}>
                    leia o Qrcode abaixo para conectar
                    <QRCode value={qrcode} size={30 * vw} />
                </Paper>
            )}
        </Box>
    )
}
