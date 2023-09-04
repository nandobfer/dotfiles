import { Socket } from "socket.io"
import { Business, PrismaClient } from "@prisma/client"
import { fetch, include } from "../prisma"
import { createWriteStream } from "fs"
import { ClientBag } from "../../definitions/client"

const prisma = new PrismaClient()

export const handleBusiness = async (socket: Socket, data: Business & { file: File }, clients: ClientBag) => {
    const client = clients.get(socket)
    const arrayBuffer = await data.file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const filePath = `/static/user/${client.user.id}/business/images/profile`
    createWriteStream(filePath).write(buffer)
    // writeFileSync(`/static/${client.user.id}/business/profile`, file.)

    // const business = await prisma.business.create({
    //     data: {
    //         document: data.document,
    //         email: data.email,
    //         name: data.name,
    //         phone: data.phone,
    //         service: data.service,
    //         store: data.store,
    //         userId: data.userId,
    //         image: data.image,
    //     },
    //     include: include.business,
    // })

    // socket.broadcast.emit("business:new", business)
    // socket.emit("business:new", business)
}
