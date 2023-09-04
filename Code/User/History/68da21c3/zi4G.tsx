import { Box, Dialog, MenuItem, Skeleton, SxProps } from "@mui/material"
import { IconButton, Paper } from "@mui/material"
import React, { forwardRef, useEffect, useRef, useState } from "react"
import { QRCode } from "react-qrcode-logo"
import { saveAs } from "file-saver"
import SaveIcon from "@mui/icons-material/Save"

interface QrCodeModalProps {
    value: string
    ref: React.RefObject<HTMLDivElement>
}

const MyQRCode = forwardRef<HTMLDivElement, React.ComponentProps<typeof QRCode>>((props, ref) => (
    <Box ref={ref}>
        <QRCode {...props} />
    </Box>
))

export const QrCodeModal: React.FC<QrCodeModalProps> = ({ value, ref }) => {
    const vw = window.innerWidth / 100

    return <MyQRCode value={value} size={30 * vw} ref={ref} />
}
