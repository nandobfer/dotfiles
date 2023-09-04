import { useContext } from "react"
import IoContext from "../contexts/ioContext"

export const useIo = () => {
    const ioContext = useContext(IoContext)
    const io = ioContext.io

    const rooms = {
        get: () => io.emit("rooms"),
    }

    return { io, rooms }
}
