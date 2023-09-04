import React from "react"
import { Box } from "@mui/material"
import { useChats } from "../hooks/useChats"

interface ChatsProps {
    channel: string
}

export const Chats: React.FC<ChatsProps> = ({ channel }) => {
    const chats = useChats().getChannel(channel)

    return <Box sx={{}}></Box>
}
