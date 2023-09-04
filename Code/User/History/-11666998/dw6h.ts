import { Socket } from "socket.io"
import { Business, PrismaClient } from "@prisma/client"
import { fetch, include } from "../prisma"
import { createWriteStream, existsSync, mkdirSync } from "fs"
import { ClientBag } from "../../definitions/client"
import { join } from "path"

const prisma = new PrismaClient()

export const handleBusiness = async (socket: Socket, data: Business & { file: File }, clients: ClientBag) => {
    const client = clients.get(socket)
    const arrayBuffer = await data.file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const uploadDir = `/static/user/${client.user.id}/business/images`
    if (!existsSync(uploadDir)) {
        mkdirSync(uploadDir, { recursive: true })
    }

    const filepath = join(uploadDir, "profile")
    createWriteStream(filepath).write(buffer)

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
