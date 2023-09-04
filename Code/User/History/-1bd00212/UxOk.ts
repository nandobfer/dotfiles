import { Socket } from "socket.io"

const rooms: Room[] = []

const listRooms = () => {
    const gameRoom: GameRoom = rooms.map((room) => ({ ...room, client: { player: room.client.player, user: room.client.user } }))
}

export const handleUi = (socket: Socket, clients: Client[], listClients: () => GameClient[], getClient: (socket: Socket) => Client) => {
    socket.on("rooms", () => {})
}
