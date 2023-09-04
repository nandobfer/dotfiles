import React from "react"
import { Avatar, Badge, Box, Paper } from "@mui/material"

interface ChatProps {
    chat: Chat
}

export const Chat: React.FC<ChatProps> = ({ chat }) => {
    return (
        <Paper elevation={3} sx={{ padding: "1vw", backgroundColor: "background.paper", alignItems: "center", gap: "1vw", height: "5vw" }}>
            <Avatar src={chat.profilePic} sx={{ width: "3vw", height: "3vw" }} />
            <Box
                sx={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    overflow: "hidden",
                    color: "secondary.main",
                }}
            >
                <p style={{ fontWeight: "bold" }}>{chat.name}</p>
                <p style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", width: "19vw", overflow: "hidden" }} title={chat.lastMessage.body}>
                    {chat.lastMessage.body}
                </p>
            </Box>
            <Box
                sx={{
                    marginLeft: "auto",
                    alignItems: "flex-end",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    color: "secondary.main",
                }}
            >
                <p>{new Date(chat.timestamp * 1000).toLocaleTimeString("pt-br", { hour12: false, hour: "2-digit", minute: "2-digit" })}</p>
                {!!chat.unreadCount && (
                    <Box
                        color={"secondary.main"}
                        sx={{
                            bgcolor: "secondary.main",
                            borderRadius: "1vw",
                            padding: "0.3vw",
                            fontSize: "0.7vw",
                            fontWeight: "bold",
                            minWidth: "1.5vw",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "primary.main",
                        }}
                    >
                        {chat.unreadCount}
                    </Box>
                )}
            </Box>
        </Paper>
    )
}
