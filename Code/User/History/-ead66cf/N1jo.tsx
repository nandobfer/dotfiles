import { useContext } from "react"
import CustomersContext from "../contexts/customersContext"

export const useCustomers = () => {
    const customersContext = useContext(CustomersContext)
    const { customers } = customersContext

    return { customers }
}
