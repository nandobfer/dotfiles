import { useIo } from "./useIo"

export const useSignup = () => {
    const io = useIo()

    const signup = (data: { email: string; document: string; password: string; name: string; username: string }) => {
        io.emit("user:signup", data)
    }

    return signup
}