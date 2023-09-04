import { useContext } from "react"
import BusinessesContext from "../contexts/businessesContext"

export const useBusinesses = () => {
    const businessesContext = useContext(BusinessesContext)

    const newBusiness = (data: Business) => {}

    return { ...businessesContext }
}
