import { useContext } from 'react'
import UserContext from '../contexts/userContext'
import { useApi } from "./useApi"
import { useSnackbar } from "burgos-snackbar"
import { useIo } from "./useIo"

export const useUser = () => {
    const api = useApi()
    const { snackbar } = useSnackbar()
    const { io } = useIo()

    const userContext = useContext(UserContext)
    const user = userContext.user
    const setUser = userContext.setUser
    
    const drawer = {
        open: userContext.drawer.open,
        toogle: () => userContext.drawer.setOpen(!userContext.drawer.open),
        close: () => userContext.drawer.setOpen(false),
    }

    const login = (values: LoginForm, setLoading: (value: boolean) => void) => {
        setLoading(true)
        api.user.login({
            data: values,
            callback: (response: { data?: User }) => {
                const user = response.data
                if (user) {
                    setUser(user)
                    snackbar({ severity: "success", text: "logado" })
                } else {
                    snackbar({ severity: "error", text: "não foi possível fazer login" })
                }
            },
            finallyCallback: () => setLoading(false),
        })
    }

    const logout = () => {
        setUser(null)
        drawer.close()
    }

    return { user, drawer, login, logout }
}