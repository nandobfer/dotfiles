import { users } from "@prisma/client"
import { Socket } from "socket.io"
import log from "./log"

interface UserBag {
    user_id: number
    seller: users
}

export const handleUsers = (socket: Socket) => {
    socket.on("user:new", async (data: UserBag) => {
        const { user_id, seller } = data
        socket.broadcast.emit("user:new", seller)
    })

    socket.on("user:update", async (data: UserBag) => {
        const { user_id, seller } = data

        socket.broadcast.emit("user:update", seller)
        log(`Usuário ${seller.username} atualizado`, user_id)
    })

    socket.on("user:remove", (user: users) => {
        console.log(user)
        socket.broadcast.emit("user:remove", user)
    })
}
