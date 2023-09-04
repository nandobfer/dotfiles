import { Service } from "@prisma/client"
import { Socket } from "socket.io"
import { getIoInstance } from "./socket"
import databaseHandler from "../databaseHandler"

const prisma = databaseHandler

const update = async (socket: Socket, data: Service) => {
    const io = getIoInstance()

    const customer = await prisma.service.update(data)
    if (customer) {
        if (data.image) saveImage(`customers/${customer.id}/images`, data.image, "profilePic")

        io.emit("customer:update", customer)
        socket.emit("customer:update:success", customer)
    }
}

export default { update }
