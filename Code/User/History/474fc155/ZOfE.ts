import { useContext } from "react"
import IoContext from "../contexts/ioContext"

export const useIo = () => {
    const ioContext = useContext(IoContext)
    const io = ioContext.io

    const rooms = {
        refresh: () => io.emit("rooms"),
        new: (name: string, user: User) => {
            io.emit("room:new", { name, user })
        },
    }

    return { ...ioContext, rooms, list: ioContext.rooms }
}
