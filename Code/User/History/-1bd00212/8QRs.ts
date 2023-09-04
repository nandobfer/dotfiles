import { users } from "@prisma/client"
import { Socket } from "socket.io"

const rooms: Room[] = []
let last_id = 1

const listRooms = () => {
    return rooms.map((room) => ({ ...room, clients: room.clients.map((client) => ({ player: client.player, user: client.user })) }))
}

export const handleUi = (socket: Socket, clients: Client[], listClients: () => GameClient[], getClient: (socket: Socket) => Client) => {
    socket.on("rooms", () => {
        console.log(rooms)
        socket.emit("rooms", listRooms())
    })

    socket.on("room:new", (data: { user: users; name: string }) => {
        console.log(data)
        last_id += 1
        const room: Room = {
            id: last_id,
            name: data.name,
            clients: [getClient(socket)],
        }

        rooms.push(room)
        socket.emit("room:new:complete", room)
        socket.broadcast.emit("room:new", room)
    })
}
