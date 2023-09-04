import { createContext, useEffect, useState } from "react"
import React from "react"
import { useApi } from "../hooks/useApi"
import { useUser } from "../hooks/useUser"

interface ContractsContextValue {
    contracts: Contract[]
    setContracts: (value: Contract[]) => void
}

interface ContractsProviderProps {
    children: React.ReactNode
}

const ContractsContext = createContext<ContractsContextValue>({} as ContractsContextValue)

export default ContractsContext

export const ContractsProvider: React.FC<ContractsProviderProps> = ({ children }) => {
    const api = useApi()
    const { user } = useUser()

    const [value, setValue] = useState<Contract[]>([])

    useEffect(() => {
        if (user!.adm) {
            api.contracts.list({
                callback: (response: { data: Contract[] }) => setContracts(response.data),
                finallyCallback: () => setLoading(false),
            })
        } else {
            api.contracts.find.seller({
                data: user!,
                callback: (response: { data: Contract[] }) => setContracts(response.data),
                finallyCallback: () => setLoading(false),
            })
        }
    }, [])

    return <ContractsContext.Provider value={{ contracts: value, setContracts: setValue }}>{children}</ContractsContext.Provider>
}
