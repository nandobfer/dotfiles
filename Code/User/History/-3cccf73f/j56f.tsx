import { createContext, useState } from "react"
import React from "react"

interface CustomersContextValue {
    value: Customers | null
    setValue: (value: Customers | null) => void
}

interface CustomersProviderProps {
    children: React.ReactNode
}

const CustomersContext = createContext<CustomersContextValue>({} as CustomersContextValue)

export default CustomersContext

export const CustomersProvider: React.FC<CustomersProviderProps> = ({ children }) => {
    const [value, setValue] = useState<Customers | null>()

    return <CustomersContext.Provider value={{ value, setValue }}>{children}</CustomersContext.Provider>
}
