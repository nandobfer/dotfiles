import { useContext } from "react"
import SellersContext from "../contexts/sellersContext"

export const useSellers = () => {
    const sellersContext = useContext(SellersContext)

    const sellers = {
        list: sellersContext.value,
        sellers: sellersContext.value,
        set: sellersContext.setValue,
        loading: sellersContext.loading,
        setLoading: sellersContext.setLoading,
        add: (seller: User) => sellersContext.setValue([...sellersContext.value, seller]),
        remove: (seller: User) => sellersContext.setValue(sellersContext.value.filter((item) => item.id != seller.id)),
        update: (seller: User) => sellersContext.setValue([...sellersContext.value.filter((item) => item.id != seller.id), seller]),
    }

    // const contracts = {
    //     list: contractsContext.contracts,
    //     contracts: contractsContext.contracts,
    //     set: contractsContext.setContracts,
    //     loading: contractsContext.loading,
    //     setLoading: contractsContext.setLoading,
    //     add: (contract: Contract) => {
    //         contractsContext.setContracts([...contractsContext.contracts, contract])
    //     },
    //     remove: (contract: Contract) => contractsContext.setContracts(contractsContext.contracts.filter((item) => item.id != contract.id)),
    //     update: (contract: Contract) =>
    //         contractsContext.setContracts([...contractsContext.contracts.filter((item) => item.id != contract.id), contract]),
    // }

    return { sellers, setSellers }
}
