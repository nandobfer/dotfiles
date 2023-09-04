import { createContext, useEffect, useState } from "react"
import React from "react"
import { useApi } from "../hooks/useApi"

interface SellersContextValue {
    value: User[]
    setValue: (value: User[]) => void
}

interface SellersProviderProps {
    children: React.ReactNode
}

const SellersContext = createContext<SellersContextValue>({} as SellersContextValue)

export default SellersContext

export const SellersProvider: React.FC<SellersProviderProps> = ({ children }) => {
    const api = useApi()
    const [value, setValue] = useState<User[]>([])

    useEffect(() => {
        api.user.list({
            callback: (response: { data: User[] }) => setValue(response.data),
        })
    }, [])

    return <SellersContext.Provider value={{ value, setValue }}>{children}</SellersContext.Provider>
}
