import { useSnackbar } from "burgos-snackbar"

export const useApi = () => {
    const { snackbar } = useSnackbar()

    const defaultError = (error: Error, errorCallback?: Function) => {
        errorCallback && errorCallback()
        console.error(error)
        snackbar({ severity: "error", text: "erro desconhecido" })
    }

    const defaultFinally = (finallyCallback?: Function) => {
        finallyCallback && finallyCallback()
    }

    const user = {
        login: ()
    }
}
