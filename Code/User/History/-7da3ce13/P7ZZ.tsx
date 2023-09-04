import { createContext, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"

interface UsersContextValue {
    users: User[]
    setUsers: (value: User[]) => void

    loading: boolean
    setLoading: (value: boolean) => void
}

interface UsersProviderProps {
    children: React.ReactNode
}

const UsersContext = createContext<UsersContextValue>({} as UsersContextValue)

export default UsersContext

export const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
    const io = useIo()

    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    io.on("user:list", (data: User[]) => {
        setUsers(data)
    })

    return <UsersContext.Provider value={{ users, setUsers, loading, setLoading }}>{children}</UsersContext.Provider>
}
