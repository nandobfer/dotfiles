import { Socket } from "socket.io"
import { ClientBag } from "../../definitions/client"
import { Business, PrismaClient } from "@prisma/client"
import { fetch } from "../prisma"

const prisma = new PrismaClient()

export const handleBusiness = async (socket: Socket, data: Business) => {
    socket.broadcast.emit("business:new", data)
}
