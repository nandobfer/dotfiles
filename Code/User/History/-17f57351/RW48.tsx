import { createContext, useEffect, useState } from "react"
import React from "react"
import { useNavigationList } from "../hooks/useNavigationList"

interface MenuDrawerContextValue {
    open: boolean
    setOpen: (value: boolean) => void
    currentSection: NavigationMenu
    setCurrentSection: (value: NavigationMenu) => void
}

interface MenuDrawerProviderProps {
    children: React.ReactNode
}

const MenuDrawerContext = createContext<MenuDrawerContextValue>({} as MenuDrawerContextValue)

export default MenuDrawerContext

export const MenuDrawerProvider: React.FC<MenuDrawerProviderProps> = ({ children }) => {
    const menus = useNavigationList()

    const [open, setOpen] = useState<boolean>(false)
    const [currentSection, setCurrentSection] = useState<NavigationMenu>(menus[0])

    return <MenuDrawerContext.Provider value={{ open, setOpen }}>{children}</MenuDrawerContext.Provider>
}
