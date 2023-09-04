import { createContext, useEffect, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"

interface ZapContextValue {
    client?: {
        chats: any[]
    }

    qrcode: string
}

interface ZapProviderProps {
    children: React.ReactNode
}

const ZapContext = createContext<ZapContextValue>({} as ZapContextValue)

export default ZapContext

export const ZapProvider: React.FC<ZapProviderProps> = ({ children }) => {
    const io = useIo()
    const [qrcode, setQrcode] = useState("")
    const [chats, setChats] = useState<any[]>([])

    let client = null

    useEffect(() => {
        console.log({ qrcode })
    }, [qrcode])

    useEffect(() => {
        io.on("zap:qrcode", (code) => {
            console.log(code)
            setQrcode(code)
        })

        io.on("zap:ready", (chats) => {
            setChats(chats)
            client = {
                chats,
            }
        })

        return () => {
            io.off("zap:qrcode")
            io.off("zap:ready")
        }
    }, [])

    return <ZapContext.Provider value={{ qrcode, client }}>{children}</ZapContext.Provider>
}
