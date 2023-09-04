import { useContext } from "react"
import ContractsContext from "../contexts/contractsContext"

export const useContracts = () => {
    const contractsContext = useContext(ContractsContext)

    return { ...contractsContext }
}
