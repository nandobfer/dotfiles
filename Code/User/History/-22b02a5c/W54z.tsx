import { createContext, useState } from "react"
import React from "react"

interface TextContextValue {
    value: Text | null
    setValue: (value: Text | null) => void
}

interface TextProviderProps {
    children: React.ReactNode
}

const TextContext = createContext<TextContextValue>({} as TextContextValue)

export default TextContext

export const TextProvider: React.FC<TextProviderProps> = ({ children }) => {
    const [value, setValue] = useState<Text | null>()

    const [text, setText] = useState("Teste asdaas a das dasdsdsd")
    const [fontSize, setFontSize] = useState(30)
    const [textY, setTextY] = useState(height / 2)

    return <TextContext.Provider value={{ value, setValue }}>{children}</TextContext.Provider>
}
