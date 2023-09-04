import { Socket } from "socket.io"
import { ClientBag } from "../definitions/client"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const logout = async (socket: Socket, clients: ClientBag) => {
    clients.remove(clients?.get(socket))
}

const newUser = async (socket: Socket, clients: ClientBag) => {}

export default { logout, newUser }
