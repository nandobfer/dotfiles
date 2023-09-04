import { createContext, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"

interface BoardsContextValue {
    list: Board[];
    boards: Board[];
    set: React.Dispatch<React.SetStateAction<Board[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    add: (board: Board) => void;
    remove: (board: Board) => void;
    update: (board: Board) => void;
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

        const list = boards.sort((a, b) => a.id - b.id),
        boards: boards.sort((a, b) => a.id - b.id),
        set: setBoards,
        loading: loading,
        setLoading: setLoading,
        add: (board: Board) => {
            setBoards([...boards, board])
            io.emit("board:new", board)
        },
        remove: (board: Board) => setBoards(boards.filter((item) => item.id != board.id)),
        update: (board: Board) => setBoards([...boards.filter((item) => item.id != board.id), board]),

    io.on("board:new", (board: Board) => boards.add(board))

    return <BoardsContext.Provider value={{ boards, setBoards, loading, setLoading }}>{children}</BoardsContext.Provider>
}
