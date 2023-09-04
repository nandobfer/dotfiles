import { useContext } from "react"
import RoomContext from "../contexts/roomContext"

export const useRoom = () => {
    const roomContext = useContext(RoomContext)
    const room = roomContext.value
    const setRoom = roomContext.setValue

    return { room, setRoom }
}
