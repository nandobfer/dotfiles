import { createContext, useState } from "react"
import React from "react"

interface UiContextContextValue {}

interface UiContextProviderProps {
    children: React.ReactNode
}

const UiContextContext = createContext<UiContextContextValue>({} as UiContextContextValue)

export default UiContextContext

export const UiContextProvider: React.FC<UiContextProviderProps> = ({ children }) => {
    return <UiContextContext.Provider value={{ value, setValue }}>{children}</UiContextContext.Provider>
}
