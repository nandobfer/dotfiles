import { createContext, useState } from "react"
import React from "react"
import { socket } from "../io"
import { Socket } from "socket.io-client"

export interface Io {}

interface IoContextValue {
    io: Socket
    rooms: Room[]
}

interface IoProviderProps {
    children: React.ReactNode
}

const IoContext = createContext<IoContextValue>({} as IoContextValue)

export default IoContext

export const IoProvider: React.FC<IoProviderProps> = ({ children }) => {
    const io = socket

    const [rooms, setRooms] = useState<Room[]>([])

    io.on("rooms", (data) => {
        setRooms(data.rooms)
    })

    return <IoContext.Provider value={{ io, rooms }}>{children}</IoContext.Provider>
}
