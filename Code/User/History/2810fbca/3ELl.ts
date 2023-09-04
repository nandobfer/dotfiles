import { useContext } from "react"
import UserContext from "../contexts/userContext"
import { useIo } from "./useIo"

export const useUser = () => {
    const { user, setUser, loginLoading, setLoginLoading } = useContext(UserContext)
    const io = useIo()

    const login = (data: LoginData) => {
        io.emit("login:try", data)
    }

    return { login, loginLoading, setLoginLoading }
}
