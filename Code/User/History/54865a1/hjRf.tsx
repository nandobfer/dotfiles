import { createContext, useEffect, useState } from "react"
import React from "react"
import { useApi } from "../hooks/useApi"
import { useIo } from "../hooks/useIo"
import { useSnackbar } from "burgos-snackbar"

interface SellersContextValue {
    value: User[]
    setValue: (value: User[]) => void
    loading: boolean
    setLoading: (loading: boolean) => void
}

interface SellersProviderProps {
    children: React.ReactNode
}

const SellersContext = createContext<SellersContextValue>({} as SellersContextValue)

export default SellersContext

export const SellersProvider: React.FC<SellersProviderProps> = ({ children }) => {
    const io = useIo()

    const { snackbar } = useSnackbar()

    const [sellers, setSellers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)

    const list = sellers.sort((a, b) => a.id - b.id)
    const set = setSellers
    const add = (seller: User, emit = false) => {
        if (emit) io.emit("seller:new", seller)
        setSellers([...sellers, seller])
        snackbar({ severity: emit ? "success" : "info", text: `novo vendedor ${seller.name}` })
    }

    const remove = (seller: User, emit = false) => {
        if (emit) io.emit("seller:remove", seller)
        setSellers(sellers.filter((item) => item.id != seller.id))
        snackbar({ severity: emit ? "warning" : "info", text: `vendedor ${seller.name} removido` })
    }

    const update = (seller: User, emit = false) => {
        setSellers([...sellers.filter((item) => item.id != seller.id), seller])
        if (emit) io.emit("seller:update", seller)
        snackbar({ severity: emit ? "success" : "info", text: `vendedor ${seller.name} atualizado` })
    }

    io.on("seller:new", (seller: User) => add(seller))
    io.on("seller:remove", (seller: User) => remove(seller))
    io.on("seller:update", (seller: User) => update(seller))

    return <SellersContext.Provider value={{ value, setValue, loading, setLoading }}>{children}</SellersContext.Provider>
}
