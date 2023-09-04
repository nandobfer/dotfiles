import React from "react"
import { Box, Skeleton } from "@mui/material"
import { backgroundStyle } from "../../style/background"
import { Header } from "../../components/Header"
import { useZap } from "../../hooks/useZap"
import { QRCode } from "react-qrcode-logo"

interface ZapProps {
    user: User
}

export const Zap: React.FC<ZapProps> = ({ user }) => {
    const { client, qrcode } = useZap()

    return (
        <Box sx={backgroundStyle}>
            <Header user={user} />
            {client ? (
                <Box sx={{ flexDirection: "column" }}>
                    <p>zap</p>
                </Box>
            ) : (
                <Box sx={{ flexDirection: "column" }}>{!!qrcode ? <Skeleton variant="rectangular" /> : <QRCode value={qrcode} />}</Box>
            )}
        </Box>
    )
}
