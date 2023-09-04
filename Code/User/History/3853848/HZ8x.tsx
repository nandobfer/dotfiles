import React from "react"
import { Box } from "@mui/material"

interface MessageProps {
    message: Message
}

export const Message: React.FC<MessageProps> = ({ message }) => {
    return (
        <Box sx={{ width: "50%", padding: "0.25vw", flexDirection: "column" }}>
            <p style={{}}>{message.body}</p>
        </Box>
    )
}
