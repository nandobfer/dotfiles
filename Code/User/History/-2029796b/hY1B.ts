import { useContext } from "react"
import StatusesContext from "../contexts/statusesContext"

export const useStatuses = () => {
    const statusesContext = useContext(StatusesContext)
    const statuses = statusesContext

    const add = (seller: User) => statuses.add(seller, true)
    const remove = (seller: User) => statuses.remove(seller, true)
    const update = (seller: User) => statuses.update(seller, true)

    return { ...statuses, add, remove, update }
}
