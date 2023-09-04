import { useContext } from "react"
import UsersContext from "../contexts/usersContext"

export const useUsers = () => {
    const usersContext = useContext(UsersContext)

    return { ...usersContext }
}
