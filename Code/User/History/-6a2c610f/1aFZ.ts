import { Socket } from "socket.io"
import { ClientBag } from "../definitions/client"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const newChat = async (socket: Socket, clients: ClientBag, data: NewChatBag) => {
    const client = clients.get(socket)
}

export const handleChat = async (socket: Socket, clients: ClientBag, data: ChatBag) => {}
