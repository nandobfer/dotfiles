import { users } from "@prisma/client"
import { Socket } from "socket.io"
import { handleUi } from "./rooms"
import { handleGame } from "./game"

export let clientList: Client[] = []

const clients = {
    get: (socket: Socket) => {
        const client = clientList.filter((client) => client.connection == socket)[0]
        return client
    },
    list: () => {
        return clientList.map((client) => ({ player: client.player, user: client.user }))
    },
    add: (client: Client) => clientList.push(client),
}

export const onConnection = (socket: Socket) => {
    console.log("new io connection")
    handleUi(socket, clientList, listClients, getClient)
    handleGame(socket, clientList, listClients, getClient)

    socket.on("disconnect", () => {
        const client = getClient(socket)
        console.log(`${client?.user?.name} disconnected`)

        clientList = clientList.filter((client) => client.connection != socket)

        // socket.broadcast.emit("player:disconnect", { player: client.player, user: client.user })
    })
}
