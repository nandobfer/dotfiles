import { Socket } from "socket.io"
import { ClientBag } from "../../definitions/client"
import { Business, PrismaClient } from "@prisma/client"
import { fetch, include } from "../prisma"

const prisma = new PrismaClient()

export const handleBusiness = async (socket: Socket, data: Business & { file: File }) => {
    console.log(data)

    prisma.business
        .create({
            data: {
                document: data.document,
                email: data.email,
                name: data.name,
                phone: data.phone,
                service: data.service,
                store: data.store,
                userId: data.userId,
                image: data.image,
            },
            include: include.business,
        })
        .then((result) => {
            if (result) {
                io.emit("business:new", result)
                if (callback) callback(result)
            }
        })
}
