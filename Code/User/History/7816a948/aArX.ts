import { contractStatus as Status, contractStatus } from "@prisma/client"
import { Socket } from "socket.io"

interface StatusBag {
    user_id: number
    status: contractStatus
}

export const handleStatuses = (socket: Socket) => {
    socket.on("status:new", (data: StatusBag) => {
        const { status, user_id } = data
        console.log(status)
        socket.broadcast.emit("status:new", status)
    })

    socket.on("status:update", (data: StatusBag) => {
        const { status, user_id } = data
        console.log(status)
        socket.broadcast.emit("status:update", status)
    })

    socket.on("status:remove", (data: StatusBag) => {
        const { status, user_id } = data
        console.log(status)
        socket.broadcast.emit("status:remove", status)
    })
}
