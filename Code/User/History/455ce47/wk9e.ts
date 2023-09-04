import { useContext } from "react"
import BusinessesContext from "../contexts/businessesContext"
import { useIo } from "./useIo"

export const useBusinesses = () => {
    const io = useIo()
    const businessesContext = useContext(BusinessesContext)

    const newBusiness = (data: Business & { file: File }) => {
        io.emit("business:new", data)
    }

    return { ...businessesContext, new: newBusiness }
}
