import { useSnackbar } from "burgos-snackbar"
import { api } from "../api"

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
        login: (options: ApiOptions) => {
            api.post("/login", options.data)
                .then((response) => options.callback(response))
                .catch((error) => defaultError(error, options.errorCallback))
                .finally(() => defaultFinally(options.finallyCallback))
        },
    }
}
