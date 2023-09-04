import { users } from "@prisma/client"
import { Socket } from "socket.io"


interface UserBag {
    user: users
    seller: users
}

export const handleUsers = (socket: Socket) => {
    socket.on("user:new", async (data: UserBag) => {
        const { user, seller } = data
        socket.broadcast.emit("user:new", seller)
    })

    socket.on("user:update", async (data: UserBag) => {
        const { user, seller } = data

        socket.broadcast.emit("user:update", seller)

        await prisma.userLogs.create({
            data: {
                date: new Date(),
                text: `Usuário ${seller.username} atualizado`,
                user_id: user.id,
            },
        })
    })

    socket.on("user:remove", (user: users) => {
        console.log(user)
        socket.broadcast.emit("user:remove", user)
    })
}
