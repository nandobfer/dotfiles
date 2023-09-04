import { createContext, useEffect, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"

interface ProducersContextValue {
    producers: Producer[]
    setProducers: (value: Producer[]) => void

    loading: boolean
    setLoading: (value: boolean) => void
}

interface ProducersProviderProps {
    children: React.ReactNode
}

const ProducersContext = createContext<ProducersContextValue>({} as ProducersContextValue)

export default ProducersContext

export const ProducersProvider: React.FC<ProducersProviderProps> = ({ children }) => {
    const io = useIo()

    const [producers, setProducers] = useState<Producer[]>([])
    const [loading, setLoading] = useState(false)

    io.on("producer:list", (data: Producer[]) => {
        setProducers(data)
        setLoading(false)
    })

    io.on("producer:new", (producer: Producer) => {
        console.log({ producer })
        setProducers([...producers, producer])
    })

    useEffect(() => {
        console.log({ producers })
    }, [producers])

    return (
        <ProducersContext.Provider value={{ producers, setProducers, loading, setLoading }}>
            {children}
        </ProducersContext.Provider>
    )
}
