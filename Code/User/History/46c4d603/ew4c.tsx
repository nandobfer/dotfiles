import React from "react"
import { Avatar, Badge, Box, Paper } from "@mui/material"

interface ChatProps {
    chat: Chat
}

export const Chat: React.FC<ChatProps> = ({ chat }) => {
    return (
        <Paper elevation={3} sx={{ padding: "1vw", backgroundColor: "background.default", alignItems: "center", gap: "1vw" }}>
            <Avatar src={chat.profilePic} />
            <Box
                sx={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                <p style={{ fontWeight: "bold" }}>{chat.name}</p>
                <p style={{ whiteSpace: "nowrap", textOverflow: "ellipsis", width: "19vw", overflow: "hidden" }}>{chat.lastMessage.body}</p>
            </Box>
            <Box
                sx={{
                    marginLeft: "auto",
                    alignItems: "flex-end",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                }}
            >
                <p>{new Date(chat.timestamp * 1000).toLocaleTimeString("pt-br", { hour12: false, hour: "2-digit", minute: "2-digit" })}</p>
                {!!chat.unreadCount && (
                    <Box
                        color={"secondary.main"}
                        sx={{
                            bgcolor: "primary.main",
                            borderRadius: "1vw",
                            padding: "0.3vw",
                            fontSize: "0.7vw",
                            fontWeight: "bold",
                            minWidth: "1.5vw",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {chat.unreadCount}
                    </Box>
                )}
            </Box>
        </Paper>
    )
}
