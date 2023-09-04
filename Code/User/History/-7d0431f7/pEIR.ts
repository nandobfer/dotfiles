import { Socket } from "socket.io"
import { ClientBag } from "../definitions/client"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const handleLogin = async (socket: Socket, clientBag: ClientBag, data: { login: string; password: string }) => {
    const user = await prisma.user.findFirst({ where: { OR: [{ document: data.login }] } })
}
