import { createContext, useEffect, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"

interface ChatsContextValue {
    chats: Chat[]
    setChats: (value: Chat[]) => void
}

interface ChatsProviderProps {
    children: React.ReactNode
}

const ChatsContext = createContext<ChatsContextValue>({} as ChatsContextValue)

export default ChatsContext

export const ChatsProvider: React.FC<ChatsProviderProps> = ({ children }) => {
    const io = useIo()

    const [chats, setChats] = useState<Chat[]>([])

    useEffect(() => {
        io.on("chat:new", (chat: Chat) => {
            console.log(chat)
            setChats([...chats, chat])
        })
    }, [])

    return <ChatsContext.Provider value={{ chats, setChats }}>{children}</ChatsContext.Provider>
}
