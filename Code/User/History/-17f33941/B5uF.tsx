import { createContext, useState } from "react"
import React from "react"
import { socket } from "../io"
import { Socket } from "socket.io-client"

export interface Io {}

interface IoContextValue {
    io: Socket
}

interface IoProviderProps {
    children: React.ReactNode
}

const IoContext = createContext<IoContextValue>({} as IoContextValue)

export default IoContext

export const IoProvider: React.FC<IoProviderProps> = ({ children }) => {
    const io = socket

    return <IoContext.Provider value={{ io }}>{children}</IoContext.Provider>
}
