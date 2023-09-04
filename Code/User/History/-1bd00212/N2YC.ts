import { Socket } from "socket.io"

const rooms: Room[] = []

export const handleUi = (socket: Socket, clients: Client[], listClients: () => GameClient[], getClient: (socket: Socket) => Client) => {
    socket.on("rooms", () => {})
}
