import { Socket } from "socket.io"
import { ClientBag } from "../definitions/client"

export const handleLogin = (socket: Socket, clientBag: ClientBag) => {
    console.log(`new connection: ${socket.id}`)

    socket.on("disconnect", () => {
        console.log(`disconnected: ${socket.id}`)
    })
}
