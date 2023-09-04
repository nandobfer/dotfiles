import { boards } from "@prisma/client"
import { Socket } from "socket.io"

export const handleBoards = (socket: Socket) => {
    console.log(`new connection: ${socket.id}`)

    socket.on("board:new", (board: boards) => {
        socket.broadcast.emit("board:new", board)
    })
}
