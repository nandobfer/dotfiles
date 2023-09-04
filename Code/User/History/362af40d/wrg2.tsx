import { createContext, useState } from "react"
import React from "react"

interface NotificationsContextValue {
    open: boolean
    setOpen: (value: boolean) => void
}

interface NotificationsProviderProps {
    children: React.ReactNode
}

const NotificationsContext = createContext<NotificationsContextValue>({} as NotificationsContextValue)

export default NotificationsContext

export const NotificationsProvider: React.FC<NotificationsProviderProps> = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false)

    return <NotificationsContext.Provider value={{ open, setOpen }}>{children}</NotificationsContext.Provider>
}
