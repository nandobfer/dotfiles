import { Socket } from "socket.io"
import { ClientBag } from "../definitions/client"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const newChat = async (socket: Socket, clients: ClientBag, data: NewChatBag) => {
    const client = clients.get(socket)
    const chat = await prisma.chat.create({
        data: {
            channel: data.channel,
            users: { connect: data.users.map((user) => user.id) },
        },
    })
}

export const handleChat = async (socket: Socket, clients: ClientBag, data: ChatBag) => {}
