import { User } from "@prisma/client"
import { Socket } from "socket.io"
import { ClientBag } from "../definitions/client"
import databaseHandler from "../databaseHandler"
import { getIoInstance } from "./socket"

const prisma = databaseHandler

const sync = async (user: User, clients: ClientBag, socket: Socket) => {
    const io = getIoInstance()

    clients.add({ socket, user })
    io.emit("user:connect", user)

    console.log(`new client: ${user.username}`)

    const userList = await prisma.user.list()
    // const users = userList.map((user) => {
    //     // if (clients.find(user.id)) {
    //     //     // console.log(`user ${user.username} is connected`)
    //     //     return user
    //     // }

    //     return user
    // })

    socket.emit("client:sync", userList)

    const departments = await prisma.department.list()
    socket.emit("departments:sync", departments)

    const roles = await prisma.role.list()
    socket.emit("roles:sync", roles)
}

export default { sync }
