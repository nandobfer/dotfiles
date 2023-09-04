import { useContext } from "react"
import NotificationsContext from "../contexts/notificationsContext"

export const useNotifications = () => {
    const notificationsContext = useContext(NotificationsContext)

    const toggle = () => {
        notificationsContext.setOpen(!notificationsContext.open)
    }

    return { ...notificationsContext, toggle }
}
