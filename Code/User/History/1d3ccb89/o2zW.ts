import { Business, PrismaClient } from "@prisma/client"
import { io as ioSocket } from "socket.io-client"
import { include } from "./prisma"

const prisma = new PrismaClient()
const io = ioSocket("wss://app.agenciaboz.com.br:4104")

export const crop = {
    new: (business: Business, callback: Function) => {
        prisma.business
            .create({
                data: {
                    name: business.name,
                    description: business.description,
                    price: business.price,
                    weight: business.weight,
                    date: business.date,
                    image: business.image,
                    gallery: business.gallery,
                    producerId: business.producerId,
                },
                include: include.crops,
            })
            .then((result) => {
                if (result) {
                    io.emit("business:new", result)
                    callback(result)
                }
            })
    },
}
