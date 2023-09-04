import { Socket } from "socket.io"
import { ClientBag } from "../../definitions/client"
import { PrismaClient } from "@prisma/client"
import { fetch } from "../prisma"

const prisma = new PrismaClient()

export const handleCrop = async (socket: Socket, data: {name: string}) => {
    fetch.business.categories.add(data, (result => ))
}
