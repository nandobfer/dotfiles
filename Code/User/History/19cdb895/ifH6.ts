import { Socket } from "socket.io"
import { Client } from "../../definitions/client"
import { User } from "@prisma/client"

export let clientList: Client[] = []

const userClient = (client: Client) => {
    const user: User = client.user
    return user
}

const clients = {
    get: (socket: Socket) => clientList.filter((client) => client.socket == socket)[0],
    convert: (client: Client) => userClient(client),
    list: () => {
        return clientList.map((client) => client.user)
    },
    add: (client: Client) => clientList.push(client),
    remove: (client: Client) => {
        clientList = clientList.filter((item) => item.socket != client.socket)
    },
}

export const handleSocket = (socket: Socket) => {
    console.log(`new connection: ${socket.id}`)

    socket.on("disconnect", () => {
        console.log(`disconnected: ${socket.id}`)
    })
}
