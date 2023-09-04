import { useContext } from "react"
import ChatsContext from "../contexts/chatsContext"
import { useIo } from "./useIo"
import { useUser } from "./useUser"

export const useChats = () => {
    const chatsContext = useContext(ChatsContext)
    const io = useIo()
    const { user } = useUser()

    const newChat = (destination: User) => {
        console.log(destination)

        const chat: NewChatBag = {
            channel: "buyer",
            message: "teste",
            users: [destination, user!],
        }
        io.emit("chat:new", chat)
    }

    return { ...chatsContext, newChat }
}
