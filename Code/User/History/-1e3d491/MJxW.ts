import { Socket } from "socket.io"
import { ClientBag } from "../definitions/client"
import { PrismaClient, Role, User } from "@prisma/client"

const prisma = new PrismaClient()

const logout = async (socket: Socket, clients: ClientBag) => {
    clients.remove(clients?.get(socket))
}

const newUser = async (socket: Socket, clients: ClientBag, newUser: User & { roles: Role[] }) => {
    const user = await prisma.user.create({
        data: {
            birth: new Date(),
        },
    })
}

export default { logout, newUser }
