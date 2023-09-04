import { Socket } from "socket.io"
import { Business, PrismaClient } from "@prisma/client"
import { fetch, include } from "../prisma"
import { ClientBag } from "../../definitions/client"
import { saveImage } from "../saveImage"

const prisma = new PrismaClient()

export const handleBusiness = async (socket: Socket, data: Business & { file: ArrayBuffer }, clients: ClientBag) => {
    const client = clients.get(socket)
    saveImage(`user/${client.user.id}/business/images`, data.file)

    const business = await prisma.business.create({
        data: {
            document: data.document,
            email: data.email,
            name: data.name,
            phone: data.phone,
            service: data.service,
            store: data.store,
            userId: data.userId,
            image: `data.image`,
        },
        include: include.business,
    })

    socket.broadcast.emit("business:new", business)
    socket.emit("business:new", business)
}
