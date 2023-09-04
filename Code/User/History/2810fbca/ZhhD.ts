import { useContext } from "react"
import UserContext from "../contexts/userContext"
import { useIo } from "./useIo"

export const useUser = () => {
    const userContext = useContext(UserContext)
    const io = useIo()

    const login = (data: LoginData) => {}

    return { login }
}
