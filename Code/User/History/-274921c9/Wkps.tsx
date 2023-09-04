import { createContext, useState } from "react"
import React from "react"

interface SubmenuContextValue {
    value: Menu
    setValue: (value: Menu) => void
}

interface SubmenuProviderProps {
    children: React.ReactNode
}

const SubmenuContext = createContext<SubmenuContextValue>({} as SubmenuContextValue)

export default SubmenuContext

export const SubmenuProvider: React.FC<SubmenuProviderProps> = ({ children }) => {
    const [value, setValue] = useState<Menu>()

    return <SubmenuContext.Provider value={{ value, setValue }}>{children}</SubmenuContext.Provider>
}
