import { User } from "@prisma/client"
import { Socket } from "socket.io"
import { ClientBag } from "../definitions/client"
import databaseHandler from "../databaseHandler"
import { getIoInstance } from "./socket"

const prisma = databaseHandler

const sync = async (user: User & { status: number }, clients: ClientBag, socket: Socket) => {
    const io = getIoInstance()

    clients.add({ socket, user })
    io.emit("user:connect", user)

    console.log(`new client: ${user.username}`)

    const connected = clients.list()
    socket.emit("connected:sync", connected)

    const users = await prisma.user.list()
    socket.emit("client:sync", users)

    const departments = await prisma.department.list()
    socket.emit("departments:sync", departments)

    const roles = await prisma.role.list()
    socket.emit("roles:sync", roles)

    const services = await prisma.service.list()
    socket.emit("services:sync", services)

    const customers = await prisma.customer.list()
    socket.emit("customers:sync", customers)

    const statusLog = await

    prisma.log.status(user, user.status)
}

export default { sync }
