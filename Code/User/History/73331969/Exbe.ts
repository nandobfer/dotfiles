import { useContext } from 'react'
import UserContext from '../contexts/userContext'
import { useApi } from "./useApi"
import { useSnackbar } from "burgos-snackbar"
import { useIo } from "./useIo"

export const useUser = () => {
    const api = useApi()
    const { snackbar } = useSnackbar()
    const io = useIo()

    const userContext = useContext(UserContext)
    const { user, setUser, connected, list, connectedList, setList } = userContext

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
                    io.emit("client:sync", user)
                    io.emit("zap:sync")

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
        io.emit("user:logout", user)
        drawer.close()
    }

    const remove = (user: User, setDeleting: (value: boolean) => void) => {
        setDeleting(true)
        api.user.delete({
            data: user,
            callback: () => {},
            finallyCallback: () => setDeleting(false),
        })
    }

    return { user, drawer, login, logout, connected, list, connectedList, remove }
}