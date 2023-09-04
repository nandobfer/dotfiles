import { Box, Dialog, MenuItem, Skeleton, SxProps } from "@mui/material"
import { IconButton, Paper } from "@mui/material"
import React, { forwardRef, useEffect, useRef, useState } from "react"
import { QRCode } from "react-qrcode-logo"

interface QrCodeModalProps {
    value: string
}

export const QrCodeModal = forwardRef<HTMLCanvasElement, QrCodeModalProps>((props, ref) => {
    const vw = window.innerWidth / 100

    return <QRCode value={props.value} size={20 * vw} ref={ref} />
})
