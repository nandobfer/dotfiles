import { useContext } from "react"
import UserContext from "../contexts/userContext"
import { useIo } from "./useIo"
import { useNavigate } from "react-router-dom"

export const useUser = () => {
    const io = useIo()
    const navigate = useNavigate()

    const { user, setUser, loginLoading, setLoginLoading } = useContext(UserContext)

    const login = (data: LoginData) => {
        io.emit("user:login", data)
    }

    const logout = () => {
        io.emit("user:logout")
        navigate("/login")
        setUser(null)
    }

    return { user, login, loginLoading, setLoginLoading, logout }
}
