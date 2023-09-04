import { boards } from "@prisma/client"
import { Socket } from "socket.io"

interface BoardBag {
    user_id: number
    board: boards
}


export const handleBoards = (socket: Socket) => {
    socket.on("board:new", (data: BoardBag) => {
        const { board, user_id } = data
        socket.broadcast.emit("board:new", board)
    })

    socket.on("board:update", (data: BoardBag) => {
        const { board, user_id } = data
        socket.broadcast.emit("board:update", board)
    })

    socket.on("board:remove", (data: BoardBag) => {
        const { board, user_id } = data
        socket.broadcast.emit("board:remove", board)
    })
}
