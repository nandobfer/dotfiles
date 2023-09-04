import { Socket } from "socket.io"

export const handleLogin = (socket: Socket) => {
    console.log(`new connection: ${socket.id}`)

    socket.on("disconnect", () => {
        console.log(`disconnected: ${socket.id}`)
    })
}
