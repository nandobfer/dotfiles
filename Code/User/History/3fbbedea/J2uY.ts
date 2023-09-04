import { useContext } from "react"
import ChatsContext from "../contexts/chatsContext"
import { useIo } from "./useIo"

export const useChats = () => {
    const chatsContext = useContext(ChatsContext)
    const io = useIo()

    const newChat = (user: User) => {
        // io.emit('new:chat', )
    }

    return { ...chatsContext }
}
