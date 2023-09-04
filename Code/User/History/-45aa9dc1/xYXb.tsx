import { createContext, useState } from "react"
import React from "react"

interface StatusesContextValue {
    statuses: Status[]
    setStatuses: (value: Status[]) => void
}

interface StatusesProviderProps {
    children: React.ReactNode
}

const StatusesContext = createContext<StatusesContextValue>({} as StatusesContextValue)

export default StatusesContext

export const StatusesProvider: React.FC<StatusesProviderProps> = ({ children }) => {
    const [statuses, setStatuses] = useState<Status[]>([])

    return <StatusesContext.Provider value={{ statuses, setStatuses }}>{children}</StatusesContext.Provider>
}
