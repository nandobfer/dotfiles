import { createContext, useState } from "react"
import React from "react"
import { Socket, io as ioSocket } from "socket.io-client"
import { useBoards } from "../hooks/useBoards"

interface IoContextValue {
    io: Socket
}

interface IoProviderProps {
    children: React.ReactNode
}

const IoContext = createContext<IoContextValue>({} as IoContextValue)

export default IoContext

export const IoProvider: React.FC<IoProviderProps> = ({ children }) => {
    const io = ioSocket("ws://localhost:4101")

    const boards = useBoards()

    io.on("board:new", (board: Board) => boards.add(board))

    return <IoContext.Provider value={{ io }}>{children}</IoContext.Provider>
}
