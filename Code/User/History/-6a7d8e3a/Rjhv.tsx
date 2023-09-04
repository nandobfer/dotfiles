import React from "react"
import { Box, Paper } from "@mui/material"

interface ChatsProps {
    chats: Chat[]
}

export const Chats: React.FC<ChatsProps> = ({ chats }) => {
    return (
        <Box sx={{ flexDirection: "column", gap: "1vw" }}>
            {chats.map((chat) => (
                <Paper key={chat.id.user}></Paper>
            ))}
        </Box>
    )
}
