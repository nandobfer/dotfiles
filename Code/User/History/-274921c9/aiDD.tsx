import { createContext, useState } from "react"
import React from "react"

interface SubmenuContextValue {
    submenuDrawer: {
        menu?: Menu
        setMenu: (menu?: Menu) => void
    }
}

interface SubmenuProviderProps {
    children: React.ReactNode
}

const SubmenuContext = createContext<SubmenuContextValue>({} as SubmenuContextValue)

export default SubmenuContext

export const SubmenuProvider: React.FC<SubmenuProviderProps> = ({ children }) => {
    const [menu, setMenu] = useState<Menu>()

    const submenu = {
        menu,
        setMenu,
    }

    return <SubmenuContext.Provider value={{ value, setValue }}>{children}</SubmenuContext.Provider>
}
