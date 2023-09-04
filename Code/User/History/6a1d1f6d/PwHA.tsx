import { createContext, useState } from "react"
import React from "react"

interface ZapContextValue {
    client?: {}

    qrcode: string
}

interface ZapProviderProps {
    children: React.ReactNode
}

const ZapContext = createContext<ZapContextValue>({} as ZapContextValue)

export default ZapContext

export const ZapProvider: React.FC<ZapProviderProps> = ({ children }) => {
    const [qrcode, setQrcode] = useState("")

    return <ZapContext.Provider value={{ qrcode }}>{children}</ZapContext.Provider>
}
