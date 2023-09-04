import { useContext } from "react"
import UserContext from "../contexts/userContext"
import { useIo } from "./useIo"

export const useUser = () => {
    const io = useIo()

    const { user, setUser, loginLoading, setLoginLoading } = useContext(UserContext)

    const login = (data: LoginData) => {
        io.emit("login:try", data)
    }

    const logout = () => {
        setUser(null)
    }

    return { user, login, loginLoading, setLoginLoading }
}
