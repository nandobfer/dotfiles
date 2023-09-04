import { useContext } from "react"
import UserContext from "../contexts/userContext"
import { useIo } from "./useIo"

export const useUser = () => {
    const { user, setUser } = useContext(UserContext)
    const io = useIo()

    const login = (data: LoginData, setLoading?: (value: boolean) => void) => {
        io.emit("login:try", data)

        if (setLoading) setLoading(false)
    }

    return { login }
}
