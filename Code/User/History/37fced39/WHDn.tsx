import { createContext, useState } from "react"
import React from "react"
import { Socket, io as ioSocket } from "socket.io-client"

interface IoContextValue {
    io: Socket
}

interface IoProviderProps {
    children: React.ReactNode
}

const IoContext = createContext<IoContextValue>({} as IoContextValue)

export default IoContext

export const IoProvider: React.FC<IoProviderProps> = ({ children }) => {
    const io = ioSocket("ws://192.168.15.76:4101")

    return <IoContext.Provider value={{ io }}>{children}</IoContext.Provider>
}
