import { Socket } from "socket.io"

declare interface Client {
    socket: Socket
    user: User
}
