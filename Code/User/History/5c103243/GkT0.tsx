import { createContext, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"

interface CategoriesContextValue {
    crop: Category[]
    setCrop: (value: Category[]) => void

    loading: boolean
    setLoading: (value: boolean) => void
}

interface CategoriesProviderProps {
    children: React.ReactNode
}

const CategoriesContext = createContext<CategoriesContextValue>({} as CategoriesContextValue)

export default CategoriesContext

export const CategoriesProvider: React.FC<CategoriesProviderProps> = ({ children }) => {
    const io = useIo()

    const [crop, setCrop] = useState<Category[]>([])
    const [loading, setLoading] = useState(true)

    io.on("crop:categories", (data: Category[]) => {
        setCrop(data)
    })

    return <CategoriesContext.Provider value={{ crop, setCrop, loading, setLoading }}>{children}</CategoriesContext.Provider>
}
