import { createContext, useEffect, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"

interface ZapContextValue {
    client?: Zap

    qrcode: string
    loading: boolean

    drawer: {
        open: boolean
        setOpen: (open: boolean) => void
    }
}

interface ZapProviderProps {
    children: React.ReactNode
}

const ZapContext = createContext<ZapContextValue>({} as ZapContextValue)

export default ZapContext

export const ZapProvider: React.FC<ZapProviderProps> = ({ children }) => {
    const io = useIo()
    const [loading, setLoading] = useState(true)
    const [qrcode, setQrcode] = useState("")
    const [chats, setChats] = useState<Chat[]>([])
    const [info, setInfo] = useState<any>()
    const [openDrawer, setOpenDrawer] = useState(false)

    const [connected, setConnected] = useState(false)

    const drawer = {
        open: openDrawer,
        setOpen: setOpenDrawer,
    }

    const client: Zap = {
        chats,
        info,
        connected,
    }

    useEffect(() => {
        console.log({ zapDrawer: openDrawer })
    }, [openDrawer])

    useEffect(() => {
        console.log({ info })
    }, [info])

    useEffect(() => {
        console.log({ chats })
    }, [chats])

    useEffect(() => {
        console.log({ qrcode })
    }, [qrcode])


    useEffect(() => {
        io.on("zap:qrcode", (code) => {
            console.log(code)
            setQrcode(code)
        })

        io.on("zap:ready", (data) => {
            const chats = data.chats as Chat[]
            setConnected(true)
            setInfo(data.info)
            setChats(data.chats)
            setLoading(false)

            chats.map((chat) => {
                io.emit("chat:sync", chat)
            })
        })

        io.on("zap:loading", (info: Info) => {
            setInfo(info)
            setConnected(true)
            setLoading(true)
        })

        io.on("zap:disconnected", () => {
            setConnected(false)
            setQrcode("")
        })

        return () => {
            io.off("zap:qrcode")
            io.off("zap:ready")
            io.off("zap:loading")
            io.off("zap:disconnected")
        }
    }, [])

    return <ZapContext.Provider value={{ qrcode, client, loading, drawer }}>{children}</ZapContext.Provider>
}
