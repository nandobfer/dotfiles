import { useContext } from "react"
import BoardsContext from "../contexts/boardsContext"

export const useBoards = () => {
    const boardsContext = useContext(BoardsContext)
    const boards = boardsContext

    const add = (board: Board) => boards.add(board, true)

    return { ...boards, add }
}
