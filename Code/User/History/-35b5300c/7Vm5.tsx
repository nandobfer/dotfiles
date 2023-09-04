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

    const [contracts, setContracts] = useState<Contract[]>([])

    useEffect(() => {
        if (user!.adm) {
            api.contracts.list({
                callback: (response: { data: Contract[] }) => setContracts(response.data),
            })
        } else {
            api.contracts.find.seller({
                data: user!,
                callback: (response: { data: Contract[] }) => setContracts(response.data),
            })
        }
    }, [])

    return <ContractsContext.Provider value={{ contracts: contracts, setContracts: setContracts }}>{children}</ContractsContext.Provider>
}
