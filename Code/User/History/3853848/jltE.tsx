import React from "react"
import { Box } from "@mui/material"

interface MessageProps {
    message: Message
}

export const Message: React.FC<MessageProps> = ({ message }) => {
    return (
        <Box sx={{ width: "50%", padding: "0.25vw", flexDirection: "column", alignSelf: message.fromMe ? "flex-end" : "flex-start" }}>
            <p style={{ wordBreak: "break-all" }}>{message.body}</p>
        </Box>
    )
}
