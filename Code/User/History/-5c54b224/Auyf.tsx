import React from "react"
import { Box } from "@mui/material"

interface ChatCardProps {
    chat: Chat
}

export const ChatCard: React.FC<ChatCardProps> = ({ chat }) => {
    return <Box sx={{}}>{chat.id}</Box>
}
