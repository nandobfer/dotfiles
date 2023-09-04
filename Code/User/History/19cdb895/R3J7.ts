import { Socket } from "socket.io"
import { Client } from "../../definitions/client"

const clientList: Client[] = []

export const handleSocket = (socket: Socket) => {
    console.log(`new connection: ${socket.id}`)

    socket.on("disconnect", () => {
        console.log(`disconnected: ${socket.id}`)
    })
}
