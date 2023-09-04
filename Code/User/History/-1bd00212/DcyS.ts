import { users } from "@prisma/client"
import { Socket } from "socket.io"

const roomsList: Room[] = []
let last_id = 1

export const handleUi = (socket: Socket, clients: ClientListBag) => {
    const rooms = {
        list: () => {
            return roomsList.map((room) => ({ ...room, clients: room.clients.map((client) => clients.get(client, true)) }))
        },
        convert: (room: Room) => ({ ...room, clients: room.clients.map((client) => clients.get(client, true)) }),
    }

    socket.on("rooms", (data: { player: Player; user: users }) => {
        console.log(roomsList)
        clients.add({
            connection: socket,
            player: data.player,
            user: data.user,
        })
        socket.emit("rooms", rooms.list())
    })

    socket.on("room:new", (data: { user: users; name: string }) => {
        console.log(data)
        last_id += 1
        const room: Room = {
            id: last_id,
            name: data.name,
            clients: [clients.get(socket) as Client],
        }

        roomsList.push(room)
        socket.emit("room:new:complete", room)
        socket.broadcast.emit("room:new", room)
    })
}
