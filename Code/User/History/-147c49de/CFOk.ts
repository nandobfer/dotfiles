import { users } from "@prisma/client"
import { Socket } from "socket.io"

export const handleGame = (socket: Socket, listClients: () => GameClient) => {
    socket.on("player:new", (data) => {
        const player: Player = data.player
        const user: users = data.user

        const client: Client = {
            connection: socket,
            player,
            user,
        }

        socket.broadcast.emit("player:new", { player, user })
        socket.emit("players", listClients())

        clients.push(client)
    })

    socket.on("player:sync", (data) => {
        const player: Player = data.player
        const user: users = data.user

        const client = getClient(socket)
        client.player = player
        socket.emit(
            "player:sync",
            listClients().filter((client) => client.user.id != user.id)
        )
    })
}
