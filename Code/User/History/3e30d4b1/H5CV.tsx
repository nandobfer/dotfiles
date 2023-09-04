import { createContext, useEffect, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"

interface BusinessesContextValue {
    businesses: Business[]
    setBusinesses: (value: Business[]) => void

    loading: boolean
    setLoading: (value: boolean) => void
}

interface BusinessesProviderProps {
    children: React.ReactNode
}

const BusinessesContext = createContext<BusinessesContextValue>({} as BusinessesContextValue)

export default BusinessesContext

export const BusinessesProvider: React.FC<BusinessesProviderProps> = ({ children }) => {
    const io = useIo()

    const [businesses, setBusinesses] = useState<Business[]>([])
    const [loading, setLoading] = useState(true)

    io.on("business:list", (data: Business[]) => {
        setBusinesses(data)
        setLoading(false)
    })

    io.on("business:new", (business: Business) => {
        console.log({ business })
        setBusinesses([...businesses, business])
        setLoading(false)
    })

    useEffect(() => {
        console.log({ businesses })
    }, [businesses])

    return <BusinessesContext.Provider value={{ businesses, setBusinesses, loading, setLoading }}>{children}</BusinessesContext.Provider>
}
