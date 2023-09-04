import React from 'react'
import {Box} from '@mui/material'

interface ChatProps {
    chat:Chat
}

export const Chat:React.FC<ChatProps> = ({ chat }) => {
    
    return (
        <Box sx={{flexDirection: 'column'}}>
            {chat.messages.map(message => )}
        </Box>
    )
}