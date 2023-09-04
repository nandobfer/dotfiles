import { Socket } from "socket.io"

declare interface IoClient {
    socket: Socket
    user: User
}
