import { useContext } from "react"
import SellersContext from "../contexts/sellersContext"

export const useSellers = () => {
    const sellersContext = useContext(SellersContext)


    return sellers
}
