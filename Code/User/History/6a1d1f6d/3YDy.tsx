import { createContext, useState } from "react"
import React from "react"

interface ZapContextValue {
    client?: {}
}

interface ZapProviderProps {
    children: React.ReactNode
}

const ZapContext = createContext<ZapContextValue>({} as ZapContextValue)

export default ZapContext

export const ZapProvider: React.FC<ZapProviderProps> = ({ children }) => {
    const [value, setValue] = useState<Zap | null>()

    return <ZapContext.Provider value={{ value, setValue }}>{children}</ZapContext.Provider>
}
