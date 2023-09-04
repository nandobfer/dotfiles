import React from "react"
import { Box } from "@mui/material"

interface MessageProps {
    message: Message
}

export const Message: React.FC<MessageProps> = ({ message }) => {
    return (
        <Box sx={{ width: "100%", padding: "0.25vw", flexDirection: "column" }}>
            <p style={{ width: "50%", alignSelf: message.fromMe ? "flex-start" : "flex-end", textAlign: message.fromMe ? "start" : "end" }}>
                {message.body}
            </p>
        </Box>
    )
}
