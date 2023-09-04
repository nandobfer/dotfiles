import { createContext, useEffect, useState } from "react"
import React from "react"
import { useApi } from "../hooks/useApi"
import { useContracts } from "../hooks/useContracts"

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
    const api = useApi()
    const { setContracts } = useContracts()

    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        if (user) {
            if (user.adm) {
                api.contracts.list({
                    callback: (response: { data: Contract[] }) => setContracts(response.data),
                })
            } else {
                api.contracts.find.seller({
                    data: user,
                    callback: (response: { data: Contract[] }) => setContracts(response.data),
                })
            }
        }
    }, [user])

    return <UserContext.Provider value={{ user: user, setUser: setUser }}>{children}</UserContext.Provider>
}
