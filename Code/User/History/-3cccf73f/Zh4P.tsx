import { createContext, useEffect, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"

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
    const io = useIo()
    const [customers, setCustomers] = useState<Customer[]>([])

    useEffect(() => {
        io.on("customers:sync", (data: Customer[]) => {
            setCustomers(data)
        })

        return () => {
            io.off("customers:sync")
        }
    }, [])

    return <CustomersContext.Provider value={{ customers, setCustomers }}>{children}</CustomersContext.Provider>
}
