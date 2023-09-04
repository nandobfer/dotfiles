import React from "react"
import { Box } from "@mui/material"

interface MessageProps {
    message: Message
}

export const Message: React.FC<MessageProps> = ({ message }) => {
    return (
        <Box sx={{}}>
            <p>{message.body}</p>
        </Box>
    )
}
