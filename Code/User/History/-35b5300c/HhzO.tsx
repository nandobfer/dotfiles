import { createContext, useState } from "react"
import React from "react"

interface ContractsContextValue {
    value: Contract[]
    setValue: (value: Contract[]) => void
}

interface ContractsProviderProps {
    children: React.ReactNode
}

const ContractsContext = createContext<ContractsContextValue>({} as ContractsContextValue)

export default ContractsContext

export const ContractsProvider: React.FC<ContractsProviderProps> = ({ children }) => {
    const [value, setValue] = useState<Contract[]>([])

    return <ContractsContext.Provider value={{ value, setValue }}>{children}</ContractsContext.Provider>
}
