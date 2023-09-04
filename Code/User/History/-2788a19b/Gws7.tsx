import { createContext, useEffect, useState } from "react"
import React from "react"

interface DarkModeContextValue {
    value: boolean
    setValue: (value: boolean) => void
    toogleDarkMode: () => void
}

interface DarkModeProviderProps {
    children: React.ReactNode
}

const DarkModeContext = createContext<DarkModeContextValue>({} as DarkModeContextValue)

export default DarkModeContext

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
    const [value, setValue] = useState<boolean>(true)

    const toogleDarkMode = () => {
        setValue(!value)
    }

    useEffect(() => {
        console.log({ darkMode: value })
    }, [value])

    return <DarkModeContext.Provider value={{ value, setValue, toogleDarkMode }}>{children}</DarkModeContext.Provider>
}
