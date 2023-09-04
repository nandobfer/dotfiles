import React from "react"
import { Box } from "@mui/material"

interface MessageProps {
    message: Message
}

export const Message: React.FC<MessageProps> = ({ message }) => {
    return (
        <Box sx={{ width: "100%", padding: "0.25vw" }}>
            <p style={{ width: "50%" }}>{message.body}</p>
        </Box>
    )
}
