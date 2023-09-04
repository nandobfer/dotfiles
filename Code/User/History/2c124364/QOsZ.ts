import { useContext } from "react"
import ContractsContext from "../contexts/contractsContext"

export const useContracts = () => {
    const contractsContext = useContext(ContractsContext)

    const contracts = {
        list: contractsContext.contracts,
        contracts: contractsContext.contracts,
        set: contractsContext.setContracts,
        loading: contractsContext.loading,
        setLoading: contractsContext.setLoading,
    }

    return contracts
}
