import { Socket } from "socket.io"
import { ClientBag } from "../definitions/client"
import { Role, User } from "@prisma/client"
import { saveImage } from "../saveImage"
import databaseHandler from "../databaseHandler"

const prisma = databaseHandler

const logout = async (socket: Socket, clients: ClientBag, user: User) => {
    socket.broadcast.emit("user:disconnect", user)
    clients.remove(clients?.get(socket))
}

const newUser = async (socket: Socket, clients: ClientBag, newUser: any) => {
    const splittedBirth = newUser.birth.split("/") as string[]
    const roles = newUser.roles as Role[]

    // const user =

    if (newUser.image) saveImage(`users/${user.id}/images`, newUser.image, "profilePic")

    socket.emit("user:new:success", user)
    socket.broadcast.emit("user:new", user)
}

export default { logout, newUser }
