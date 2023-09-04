import { createContext, useEffect, useState } from "react"
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

    useEffect(() => {
        io.on("crop:new", (crop: Crop) => {
            console.log({ crop })
            setCrops([...crops, crop])
        })

        return () => {
            io.off("crop:new")
        }
    }, [crops])

    useEffect(() => {
        io.on("crop:list", (data: Crop[]) => {
            setCrops(data)
        })

        io.on("crop:category:list", (data: Category[]) => {
            console.log(data)
            setCategories(data)
        })

        return () => {
            io.off("crop:list")
            io.off("crop:category:list")
        }
    }, [])

    return <CropsContext.Provider value={{ crops, setCrops, loading, setLoading, categories, setCategories }}>{children}</CropsContext.Provider>
}
