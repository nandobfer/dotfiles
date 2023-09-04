import { Socket } from "socket.io"
import { ClientBag } from "../definitions/client"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const newChat = async (socket: Socket, clients: ClientBag, data: NewChatBag) => {
    const client = clients.get(socket)
    const destination = clients.find(data.users.filter((user) => user.id != client.user.id)[0])
    const chat = await prisma.chat.create({
        data: {
            channel: data.channel,
            messages: { create: { text: data.message } },
            users: { connect: data.users.map((user) => user.id) },
        },
        include: {
            messages: true,
            users: true,
        },
    })

    socket.emit("chat:new")
}

export const handleChat = async (socket: Socket, clients: ClientBag, data: ChatBag) => {}
