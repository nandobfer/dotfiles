import { useContext } from "react"
import IoContext from "../contexts/ioContext"
import { useUser } from "./useUser"
import { usePlayer } from "./usePlayer"

export const useIo = () => {
    const ioContext = useContext(IoContext)
    const io = ioContext.io

    const { user } = useUser()
    const player = usePlayer()

    const rooms = {
        refresh: () => io.emit("rooms"),
        list: ioContext.rooms,
        new: (name: string, user: User, player: GamePlayer) => {
            io.emit("room:new", { name, user, player })
        },
    }

    return { ...ioContext, rooms }
}
