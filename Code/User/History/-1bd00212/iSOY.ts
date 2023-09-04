import { Socket } from "socket.io"

const rooms: Room[] = []

const listRooms = () => {
    return rooms.map((room) => ({ ...room, client: { player: room.client.player, user: room.client.user } }))
}

export const handleUi = (socket: Socket, clients: Client[], listClients: () => GameClient[], getClient: (socket: Socket) => Client) => {
    socket.on("rooms", () => {
        console.log(rooms)
        socket.emit("rooms", listRooms())
    })
}
