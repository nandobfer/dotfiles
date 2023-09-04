import { PrismaClient, users } from "@prisma/client"
import { Socket } from "socket.io"

const prisma = new PrismaClient()

export const handleUsers = (socket: Socket) => {
    socket.on("user:new", (user: users) => {
        console.log(user)
        socket.broadcast.emit("user:new", user)
    })

    socket.on("user:update", async (user: users) => {
        console.log(user)
        socket.broadcast.emit("user:update", user)

        await prisma.userLogs.create({
            data: {
                date: new Date(),
                text: `Usuário ${user.name} atualizado`,
                user_id: user.id,
            },
            include: { user: true },
        })
    })

    socket.on("user:remove", (user: users) => {
        console.log(user)
        socket.broadcast.emit("user:remove", user)
    })
}
