import { useContext } from 'react'
import UserContext from '../contexts/userContext'
import { useApi } from "./useApi"
import { useSnackbar } from "burgos-snackbar"

export const useUser = () => {
    const api = useApi()
    const { snackbar } = useSnackbar()

    const userContext = useContext(UserContext);
    const user = userContext.user
    const setUser = userContext.setUser

    const login = (values: LoginForm, setLoading: (value: boolean) => void) => {
        setLoading(true)
        api.user.login({
            data: values,
            callback: (response: { data?: User }) => {
                const user = response.data
                if (user) {
                    alert("oi")
                } else {
                    snackbar({ severity: "error", text: "não foi possível fazer login" })
                }
            },
            finallyCallback: () => setLoading(false),
        })
    }

    return {user, setUser}
}