import { useContext } from "react"
import StatusesContext from "../contexts/statusesContext"

export const useStatuses = () => {
    const statusesContext = useContext(StatusesContext)
    const statuses = statusesContext.value
    const setStatuses = statusesContext.setValue

    return { statuses, setStatuses }
}
