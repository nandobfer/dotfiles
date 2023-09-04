import { useContext } from "react"
import SellersContext from "../contexts/sellersContext"

export const useSellers = () => {
    const sellersContext = useContext(SellersContext)
    const sellers = sellersContext.value
    const setSellers = sellersContext.setValue

    return { sellers, setSellers }
}
