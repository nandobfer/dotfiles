import React, { useState } from "react"
import { Box } from "@mui/material"
import { useChats } from "../hooks/useChats"
import { ChatCard } from "../components/ChatCard"
import { Chat } from "../components/Chat"

interface ChatsProps {
    channel: string
}

export const Chats: React.FC<ChatsProps> = ({ channel }) => {
    const chats = useChats().getChannel(channel)

    const [currentChat, setCurrentChat] = useState<Chat>()

    return currentChat ? (
        <Chat chat={currentChat} />
    ) : (
        <Box sx={{ flexDirection: "column" }}>
            {chats.map((chat) => (
                <ChatCard key={chat.id} chat={chat} onClick={() => setCurrentChat(chat)} />
            ))}
        </Box>
    )
}
