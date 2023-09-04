import { createContext, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"

interface CropsContextValue {
    crops: Crop[]
    setCrops: (value: Crop[]) => void

    loading: boolean
    setLoading: (value: boolean) => void

    categories: Category[]
    setCategories: (value: Category[]) => void
}

interface CropsProviderProps {
    children: React.ReactNode
}

const CropsContext = createContext<CropsContextValue>({} as CropsContextValue)

export default CropsContext

export const CropsProvider: React.FC<CropsProviderProps> = ({ children }) => {
    const io = useIo()

    const [crops, setCrops] = useState<Crop[]>([])
    const [categories, setCategories] = useState<Category[]>([])

    const [loading, setLoading] = useState(true)

    io.on("crop:list", (data: Crop[]) => {
        setCrops(data)
    })

    io.on("crop:new", (crop: Crop) => {
        console.log({ crop })
        setCrops([...crops, crop])
    })

    return <CropsContext.Provider value={{ crops, setCrops, loading, setLoading, categories, setCategories }}>{children}</CropsContext.Provider>
}
