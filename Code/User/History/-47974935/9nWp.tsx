import React from "react"
import { Box } from "@mui/material"
import { useChats } from "../hooks/useChats"

interface ChatsProps {
    channel: string
}

export const Chats: React.FC<ChatsProps> = ({ channel }) => {
    const { chats } = useChats()

    return <Box sx={{}}></Box>
}
