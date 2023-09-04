import { createContext, useState } from "react"
import React from "react"

interface BoardsContextValue {
    boards: Board[]
    setBoards: (boards: Board[]) => void
}

interface BoardsProviderProps {
    children: React.ReactNode
}

const BoardsContext = createContext<BoardsContextValue>({} as BoardsContextValue)

export default BoardsContext

export const BoardsProvider: React.FC<BoardsProviderProps> = ({ children }) => {
    const [boards, setBoards] = useState<Board[]>([])

    return <BoardsContext.Provider value={{ boards, setBoards }}>{children}</BoardsContext.Provider>
}
