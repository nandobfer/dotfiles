import React from "react"
import { Box } from "@mui/material"
import { useChats } from "../hooks/useChats"
import { ChatCard } from "../components/ChatCard"

interface ChatsProps {
    channel: string
}

export const Chats: React.FC<ChatsProps> = ({ channel }) => {
    const chats = useChats().getChannel(channel)

    return (
        <Box sx={{ flexDirection: "column" }}>
            {chats.map((chat) => (
                <ChatCard key={chat.id} chat={chat} />
            ))}
        </Box>
    )
}
