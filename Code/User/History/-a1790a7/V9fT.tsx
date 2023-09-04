import React from "react"
import { Box, Skeleton } from "@mui/material"
import { QRCode } from "react-qrcode-logo"

interface QrCodeProps {
    qrcode: string
}

export const QrCode: React.FC<QrCodeProps> = ({ qrcode }) => {
    return !!qrcode ? <QRCode value={qrcode} /> : <Skeleton variant="rounded" sx={{ width: "30vw", height: "30vw" }} animation="wave" />
}
