import React, { useEffect } from "react"
import { Box, Skeleton } from "@mui/material"
import { backgroundStyle } from "../../style/background"
import { Header } from "../../components/Header"
import { useZap } from "../../hooks/useZap"

interface ZapProps {
    user: User
}

export const Zap: React.FC<ZapProps> = ({ user }) => {
    const { client, qrcode } = useZap()

    useEffect(() => {
        console.log(!!qrcode)
    }, [])

    return (
        <Box sx={backgroundStyle}>
            <Header user={user} />
            {client ? (
                <Box sx={{ flexDirection: "column" }}>
                    <p>zap</p>
                </Box>
            ) : (
                <Box sx={{ flexDirection: "column" }}>
                    <p>whatsapp não conectado</p>
                </Box>
            )}
        </Box>
    )
}
