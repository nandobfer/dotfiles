import { createContext, useEffect, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"

interface BusinessesContextValue {
    businesses: Business[]
    setBusinesses: (value: Business[]) => void

    loading: boolean
    setLoading: (value: boolean) => void

    categories: BusinessCategory[]
    setCategories: (value: BusinessCategory[]) => void
}

interface BusinessesProviderProps {
    children: React.ReactNode
}

const BusinessesContext = createContext<BusinessesContextValue>({} as BusinessesContextValue)

export default BusinessesContext

export const BusinessesProvider: React.FC<BusinessesProviderProps> = ({ children }) => {
    const io = useIo()

    const [businesses, setBusinesses] = useState<Business[]>([])
    const [categories, setCategories] = useState<BusinessCategory[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        io.on("business:new", (business: Business) => {
            console.log({ business })
            setBusinesses([...businesses, business])
        })

        return () => {
            io.off("business:new")
        }
    }, [businesses])

    useEffect(() => {
        io.on("business:list", (data: Business[]) => {
            setBusinesses(data)
            setLoading(false)
        })

        io.on("business:category:list", (data: BusinessCategory[]) => setCategories(data))

        return () => {
            io.off("business:new")
        }
    }, [])

    return (
        <BusinessesContext.Provider value={{ businesses, setBusinesses, loading, setLoading, categories, setCategories }}>
            {children}
        </BusinessesContext.Provider>
    )
}
