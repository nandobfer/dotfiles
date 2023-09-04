import { users } from "@prisma/client"
import { Socket } from "socket.io"
import { handleUi } from "./rooms"
import { handleGame } from "./game"

export let clients: Client[] = []

const getClient = (socket: Socket) => {
    const client = clients.filter((client) => client.connection == socket)[0]
    return client
}

const listClients = () => {
    return clients.map((client) => ({ player: client.player, user: client.user }))
}

export const onConnection = (socket: Socket) => {
    console.log("new io connection")
    handleUi(socket, clients, listClients, getClient)
    handleGame(socket, clients, listClients, getClient)

    socket.on("disconnect", () => {
        const client = getClient(socket)
        console.log(`${client?.user?.name} disconnected`)

        clients = clients.filter((client) => client.connection != socket)

        // socket.broadcast.emit("player:disconnect", { player: client.player, user: client.user })
    })
}
