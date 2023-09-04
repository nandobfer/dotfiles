import { useContext } from "react"
import IoContext from "../contexts/ioContext"

export const useIo = () => {
    const ioContext = useContext(IoContext)
    const io = ioContext.io

    const {}

    const rooms = {
        refresh: () => io.emit("rooms"),
        list: ioContext.rooms,
        new: (name: string, user: User, player: GamePlayer) => {
            io.emit("room:new", { name, user, player })
        },
    }

    return { ...ioContext, rooms }
}
