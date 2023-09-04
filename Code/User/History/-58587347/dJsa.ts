import { Crop, PrismaClient } from "@prisma/client"
import { io as ioSocket } from "socket.io-client"

const prisma = new PrismaClient()
const io = ioSocket("ws://localhost:4104")

console.log(!!io)

export const crop = {
    new: (crop: Crop, callback: Function) => {
        prisma.crop
            .create({
                data: {
                    name: crop.name,
                    description: crop.description,
                    price: crop.price,
                    weight: crop.weight,
                    date: crop.date,
                    image: crop.image,
                    gallery: crop.gallery,
                    producerId: crop.producerId,
                },
            })
            .then((result) => {
                if (result) {
                    io.emit("crop:new", result)
                    callback(result)
                }
            })
    },
}
