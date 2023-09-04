import { Department } from "@prisma/client"
import databaseHandler from "../databaseHandler"
import { getIoInstance } from "./socket"
import { Socket } from "socket.io"

const prisma = databaseHandler

const update = async (socket: Socket, data: Department) => {
    const io = getIoInstance()

    const department = await prisma.department.update(data)
    if (department) {
        io.emit("department:update", department)
        socket.emit("department:update:success")
    }
}

const remove = async (socket: Socket, data: Department) => {
    const io = getIoInstance()

    const department = await prisma.department.delete(data)
    if (department) {
        io.emit("department:delete", department)
        socket.emit("department:delete:success")
    }
}

export default { update, remove }
