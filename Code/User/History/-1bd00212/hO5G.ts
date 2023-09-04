import { Socket } from "socket.io"

const rooms: Room[] = []

const list

export const handleUi = (socket: Socket, clients: Client[], listClients: () => GameClient[], getClient: (socket: Socket) => Client) => {
    socket.on("rooms", () => {})
}
