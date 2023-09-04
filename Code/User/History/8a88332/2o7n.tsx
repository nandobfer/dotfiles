import { createContext, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"

interface BoardsContextValue {
    list: Board[]
    set: React.Dispatch<React.SetStateAction<Board[]>>
    loading: boolean
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    add: (board: Board, emit?: Boolean) => void
    remove: (board: Board) => void
    update: (board: Board) => void
}

interface BoardsProviderProps {
    children: React.ReactNode
}

const BoardsContext = createContext<BoardsContextValue>({} as BoardsContextValue)

export default BoardsContext

export const BoardsProvider: React.FC<BoardsProviderProps> = ({ children }) => {
    const io = useIo()

    const [boards, setBoards] = useState<Board[]>([])
    const [loading, setLoading] = useState(true)

    const list = boards.sort((a, b) => a.id - b.id)
    const set = setBoards
    const add = (board: Board, emit = false) => {
        setBoards([...boards, board])
        emit && io.emit("board:new", board)
    }
    const remove = (board: Board) => setBoards(boards.filter((item) => item.id != board.id))
    const update = (board: Board) => setBoards([...boards.filter((item) => item.id != board.id), board])

    io.on("board:new", (board: Board) => add(board))

    return <BoardsContext.Provider value={{ list, set, add, remove, update, loading, setLoading }}>{children}</BoardsContext.Provider>
}
