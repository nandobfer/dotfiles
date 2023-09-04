import { createContext, useState } from "react"
import React from "react"

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
    const [value, setValue] = useState<User[]>([])

    return <SellersContext.Provider value={{ value, setValue }}>{children}</SellersContext.Provider>
}
