import React from "react"
import { Box, Paper } from "@mui/material"
import { Chat } from "./Chat"

interface ChatsProps {
    chats: Chat[]
    onChatClick: (chat: Chat) => void
}

export const Chats: React.FC<ChatsProps> = ({ chats, onChatClick }) => {
    return (
        <Box sx={{ flexDirection: "column", gap: "1vw", width: "30%" }}>
            {chats
                .sort((a, b) => b.timestamp - a.timestamp)
                .map((chat) => (
                    <Chat key={chat.id.user} chat={chat} onChatClick={onChatClick} />
                ))}
        </Box>
    )
}
