import { createContext, useState } from "react"
import React from "react"

interface HeaderContextValue {
    title: string
    setTitle: (title: string) => void
}

interface HeaderProviderProps {
    children: React.ReactNode
}

const HeaderContext = createContext<HeaderContextValue>({} as HeaderContextValue)

export default HeaderContext

export const HeaderProvider: React.FC<HeaderProviderProps> = ({ children }) => {
    const [title, setTitle] = useState<string>("")

    return <HeaderContext.Provider value={{ title, setTitle }}>{children}</HeaderContext.Provider>
}
