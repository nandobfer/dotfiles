import { User } from "@prisma/client"
import { Socket } from "socket.io"
import { ClientBag } from "../../definitions/client"
import { fetch } from "../prisma"

export const handleUserUpdate = async (socket: Socket, data: User, clients: ClientBag) => {
    const path = `user/${data.id}/business/images`
    const filename = "profile"
    saveImage(path, data.file, filename)

    const user = await fetch.user.update(data)
    console.log(user)
    socket.broadcast.emit("user:update", user)
    socket.emit("user:update", user)
}
