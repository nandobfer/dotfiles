import { createContext, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"
import { useSnackbar } from "burgos-snackbar"

interface UserContextValue {
    user: User | null
    setUser: (value: User | null) => void
}

interface UserProviderProps {
    children: React.ReactNode
}

const UserContext = createContext<UserContextValue>({} as UserContextValue)

export default UserContext

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const io = useIo()

    const { snackbar } = useSnackbar()

    const [user, setUser] = useState<User | null>(null)

    io.on("login:success", (data: User) => {
        setUser(data)
        snackbar({ severity: "success", text: "login sucesso" })
    })

    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
