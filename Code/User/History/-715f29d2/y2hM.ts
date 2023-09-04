import { users } from "@prisma/client"
import { Socket } from "socket.io"
import { handleUi } from "./rooms"
import { handleGame } from "./game"

export let clientList: Client[] = []

const gameClient = (client: Client) => ({ player: client.player, user: client.user })

const clients: ClientListBag = {
    get: (socket: Socket, game = false) => {
        const client = clientList.filter((client) => client.connection == socket)[0]
        return game ? gameClient(client) : client
    },
    list: () => {
        return clientList.map((client) => ({ player: client.player, user: client.user }))
    },
    add: (client: Client) => clientList.push(client),
    remove: (client: Client) => {
        clientList = clientList.filter((item) => item.connection != client)
    },
}

export const onConnection = (socket: Socket) => {
    console.log("new io connection")
    handleUi(socket, clients)
    handleGame(socket, clients)

    socket.on("disconnect", () => {
        const client = clients.get(socket)
        console.log(`${client?.user?.name} disconnected`)

        clients.remove(client)

        socket.broadcast.emit("player:disconnect", { player: client.player, user: client.user })
    })
}
