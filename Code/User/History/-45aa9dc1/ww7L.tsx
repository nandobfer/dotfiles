import { createContext, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"
import { useSnackbar } from "burgos-snackbar"

interface StatusesContextValue {
    statuses: Status[]
    setStatuses: (value: Status[]) => void
    loading: boolean
    setLoading: (loading: boolean) => void
}

interface StatusesProviderProps {
    children: React.ReactNode
}

const StatusesContext = createContext<StatusesContextValue>({} as StatusesContextValue)

export default StatusesContext

export const StatusesProvider: React.FC<StatusesProviderProps> = ({ children }) => {
    const io = useIo()

    const { snackbar } = useSnackbar()

    const [boards, setBoards] = useState<Board[]>([])
    const [loading, setLoading] = useState(true)

    const list = boards.sort((a, b) => a.id - b.id)
    const set = setBoards
    const add = (board: Board, emit = false) => {
        if (emit) io.emit("board:new", board)
        setBoards([...boards, board])
        snackbar({ severity: emit ? "success" : "info", text: `novo quadro ${board.name}` })
    }

    const remove = (board: Board, emit = false) => {
        if (emit) io.emit("board:remove", board)
        setBoards(boards.filter((item) => item.id != board.id))
        snackbar({ severity: emit ? "warning" : "info", text: `quadro ${board.name} removido` })
    }

    const update = (board: Board, emit = false) => {
        setBoards([...boards.filter((item) => item.id != board.id), board])
        if (emit) io.emit("board:update", board)
        snackbar({ severity: emit ? "success" : "info", text: `quadro ${board.name} atualizado` })
    }

    io.on("board:new", (board: Board) => add(board))
    io.on("board:remove", (board: Board) => remove(board))
    io.on("board:update", (board: Board) => update(board))

    return <StatusesContext.Provider value={{ statuses, setStatuses, loading, setLoading }}>{children}</StatusesContext.Provider>
}
