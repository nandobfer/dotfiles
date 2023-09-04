import React from "react"
import { Box } from "@mui/material"

interface ChatCardProps {
    chat: Chat
    onClick: () => void
}

export const ChatCard: React.FC<ChatCardProps> = ({ chat, onClick }) => {
    return (
        <Box sx={{}} onClick={onClick}>
            {chat.id}
        </Box>
    )
}
