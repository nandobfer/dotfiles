import { Socket } from "socket.io"

export const handleBoards = (socket: Socket) => {
    console.log("new connection")

    socket.on("board:new", () => {
        // socket
    })
}
