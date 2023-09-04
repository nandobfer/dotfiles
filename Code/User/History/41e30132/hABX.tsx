import { createContext, useState } from "react"
import React from "react"

interface CropsContextValue {
    crops: Crop[]
    setCrops: (value: Crop[]) => void
}

interface CropsProviderProps {
    children: React.ReactNode
}

const CropsContext = createContext<CropsContextValue>({} as CropsContextValue)

export default CropsContext

export const CropsProvider: React.FC<CropsProviderProps> = ({ children }) => {
    const [crops, setCrops] = useState<Crop[]>([])

    return <CropsContext.Provider value={{ crops, setCrops }}>{children}</CropsContext.Provider>
}
