import { useContext } from "react"
import BoardsContext from "../contexts/boardsContext"

export const useBoards = () => {
    const boardsContext = useContext(BoardsContext)

    return boardsContext
}
