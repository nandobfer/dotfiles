import { useContext } from "react"
import ChatsContext from "../contexts/chatsContext"

export const useChats = () => {
    const chatsContext = useContext(ChatsContext)

    return { ...chatsContext }
}
