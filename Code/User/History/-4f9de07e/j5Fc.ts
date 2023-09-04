import { Server } from "socket.io"
import { DefaultEventsMap } from "socket.io/dist/typed-events"

let io = {}

export const setIo = (server: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
    io = server
}

export default io
