import { Socket } from "socket.io"
import { ClientBag } from "../../definitions/client"
import { Business, PrismaClient } from "@prisma/client"
import { fetch } from "../prisma"
import { business } from "../business"

export const handleBusiness = async (socket: Socket, data: Business & { file: File }) => {
    console.log(data)

    prisma.business
        .create({
            data: {
                document: business.document,
                email: business.email,
                name: business.name,
                phone: business.phone,
                service: business.service,
                store: business.store,
                userId: business.userId,
                image: business.image,
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
