import React, { useEffect, useState } from "react"
import { Box, Paper, Skeleton } from "@mui/material"
import { backgroundStyle } from "../../style/background"
import { Header } from "../../components/Header"
import { useZap } from "../../hooks/useZap"
import { QrCode } from "./QrCode"
import { Chats } from "./Chats"
import { ChatsSkeletons } from "./ChatsSkeletons"

interface ZapProps {
    user: User
}

export const Zap: React.FC<ZapProps> = ({ user }) => {
    const { client, qrcode, loading } = useZap()

    const [chats, setChats] = useState<Chat[]>([])

    const handleSearch = (value: string) => {
        if (client) {
            const result = client.chats.filter((chat) => chat.name.toLowerCase().includes(value.toLowerCase()))
            setChats(result)
        }
    }

    useEffect(() => {
        if (client?.chats) {
            setChats(client.chats)
        }
    }, [client?.chats])

    return (
        <Box sx={backgroundStyle}>
            <Header user={user} onSearch={handleSearch} />
            {client?.connected ? (
                <Box sx={{ justifyContent: "space-between" }}>
                    <Box
                        sx={{
                            flexDirection: "column",
                            width: "100%",
                            padding: "2vw",
                            height: "90vh",
                            overflowY: "auto",
                            gap: "1vw",
                            color: "primary.main",
                            "::-webkit-scrollbar-thumb": {
                                backgroundColor: "primary.main",
                            },
                        }}
                    >
                        <p style={{ fontWeight: "bold" }}>{client.info.pushname}</p>
                        {loading ? <ChatsSkeletons /> : <Chats chats={chats} />}
                    </Box>
                    <Paper sx={{ bgcolor: "background.paper", width: "30vw", height: "100%" }}></Paper>
                </Box>
            ) : (
                <QrCode qrcode={qrcode} />
            )}
        </Box>
    )
}
