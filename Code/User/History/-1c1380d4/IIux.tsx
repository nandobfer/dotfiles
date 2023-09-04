import { Box } from "@mui/material"
import { Message } from "./Message"

interface ChatProps {
    chat: Chat
}

export const Chat: React.FC<ChatProps> = ({ chat }) => {
    return (
        <Box sx={{ flexDirection: "column" }}>
            {chat.messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}
        </Box>
    )
}
