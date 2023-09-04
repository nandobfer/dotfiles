import { Socket } from "socket.io"

export const handleBoards = (socket: Socket) => {
    socket.on("board:new", () => {
        // socket
    })
}
