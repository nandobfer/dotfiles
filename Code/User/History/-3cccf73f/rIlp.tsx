import { createContext, useState } from "react"
import React from "react"

interface CustomersContextValue {
    customers: Customer[]
    setCustomers: (value: Customer[]) => void
}

interface CustomersProviderProps {
    children: React.ReactNode
}

const CustomersContext = createContext<CustomersContextValue>({} as CustomersContextValue)

export default CustomersContext

export const CustomersProvider: React.FC<CustomersProviderProps> = ({ children }) => {
    const [customers, setCustomers] = useState<Customer[]>([])

    return <CustomersContext.Provider value={{ customers, setCustomers }}>{children}</CustomersContext.Provider>
}
