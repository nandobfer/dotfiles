import { createContext, useState } from "react"
import React from "react"

interface RoomContextValue {
    value: Room | undefined
    setValue: (value: Room | undefined) => void
}

interface RoomProviderProps {
    children: React.ReactNode
}

const RoomContext = createContext<RoomContextValue>({} as RoomContextValue)

export default RoomContext

export const RoomProvider: React.FC<RoomProviderProps> = ({ children }) => {
    const [value, setValue] = useState<Room | undefined>()

    return <RoomContext.Provider value={{ value, setValue }}>{children}</RoomContext.Provider>
}
