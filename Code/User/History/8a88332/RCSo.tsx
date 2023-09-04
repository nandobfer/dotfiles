import { createContext, useState } from "react"
import React from "react"

interface BoardsContextValue {
    board: Board[]
    setBoard: (board: Board[]) => void
}

interface BoardsProviderProps {
    children: React.ReactNode
}

const BoardsContext = createContext<BoardsContextValue>({} as BoardsContextValue)

export default BoardsContext

export const BoardsProvider: React.FC<BoardsProviderProps> = ({ children }) => {
    const [board, setBoard] = useState<Board[]>([])

    return <BoardsContext.Provider value={{ board, setBoard }}>{children}</BoardsContext.Provider>
}
