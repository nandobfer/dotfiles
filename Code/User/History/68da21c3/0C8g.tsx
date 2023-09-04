import { Box, Dialog, MenuItem, Skeleton, SxProps } from "@mui/material"
import { IconButton, Paper } from "@mui/material"
import React, { forwardRef, useEffect, useRef, useState } from "react"
import { QRCode } from "react-qrcode-logo"
import { saveAs } from "file-saver"
import SaveIcon from "@mui/icons-material/Save"

interface QrCodeModalProps {
    name: string
    content: string
    ref: React.RefObject<HTMLDivElement>
}

const MyQRCode = forwardRef<HTMLDivElement, React.ComponentProps<typeof QRCode>>((props, ref) => (
    <Box ref={ref}>
        <QRCode {...props} />
    </Box>
))

export const QrCodeModal: React.FC<QrCodeModalProps> = ({ name, content, ref }) => {
    const vw = window.innerWidth / 100

    const [hover, setHover] = useState(false)

    const downloadMenuItemStyle: SxProps = {
        position: "absolute",
        width: "99%",
        height: "99%",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        // opacity: "0.85",

        "&:hover": {
            background: "none",
        },
    }

    const downloadIconStyle: SxProps = {
        transition: "0.1s",
        width: "1vw",
        height: "auto",
        borderRadius: "20%",
    }

    
    return (
        <Paper sx={{}}>
            <div onClick={downloadImage} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <MenuItem sx={downloadMenuItemStyle}>
                    <SaveIcon sx={downloadIconStyle} />
                </MenuItem>
                <MyQRCode value={content} size={30 * vw} ref={ref} />
            </div>
        </Paper>
    )
}
