import { Socket } from "socket.io"
import { Business, PrismaClient } from "@prisma/client"
import { fetch, include } from "../prisma"
import { writeFileSync } from "fs"
import { ClientBag } from "../../definitions/client"

const prisma = new PrismaClient()

export const handleBusiness = async (socket: Socket, data: Business & { file: File }, clients: ClientBag) => {
    const client = clients.get(socket)
    const file = await data.file.arrayBuffer()
    console.log(data.file)
    console.log(file)
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
