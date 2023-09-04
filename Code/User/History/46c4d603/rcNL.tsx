import React from "react"
import { Avatar, Badge, Box, Paper } from "@mui/material"

interface ChatProps {
    chat: Chat
}

export const Chat: React.FC<ChatProps> = ({ chat }) => {
    return (
        <Paper elevation={3} sx={{ padding: "2vw", backgroundColor: "background.default", alignItems: "center", gap: "1vw" }}>
            <Avatar src={chat.profilePic} />
            <Box>
                <p>{chat.name}</p>
            </Box>
            <Box sx={{ width: "5vw", marginLeft: "auto", alignItems: "flex-end", flexDirection: "column" }}>
                <p>{new Date(chat.timestamp * 1000).toLocaleTimeString("pt-br", { hour12: false, hour: "2-digit", minute: "2-digit" })}</p>
                {!!chat.unreadCount && (
                    <Box
                        color={"secondary.main"}
                        sx={{ bgcolor: "primary.main", borderRadius: "1vw", padding: "0.3vw", fontSize: "0.7vw", fontWeight: "bold" }}
                    >
                        {chat.unreadCount}
                    </Box>
                )}
            </Box>
        </Paper>
    )
}
