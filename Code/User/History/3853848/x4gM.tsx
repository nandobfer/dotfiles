import React from "react"
import { Box, alpha } from "@mui/material"
import { useMuiTheme } from "../hooks/useMuiTheme"

interface MessageProps {
    message: Message
}

export const Message: React.FC<MessageProps> = ({ message }) => {
    const theme = useMuiTheme()
    const primary = alpha(theme.palette.primary.main, 0.5)
    const secondary = alpha(theme.palette.grey[500], 0.5)
    return (
        <Box
            sx={{
                width: "50%",
                padding: "0.75vw",
                flexDirection: "column",
                alignSelf: message.fromMe ? "flex-end" : "flex-start",
                textAlign: message.fromMe ? "end" : "start",
                borderRadius: message.fromMe ? "1vw 1vw 0 1vw" : "1vw 1vw 1vw 0",
                bgcolor: message.fromMe ? primary : secondary,
            }}
        >
            <p style={{ wordBreak: "break-all" }}>{message.body}</p>
        </Box>
    )
}
