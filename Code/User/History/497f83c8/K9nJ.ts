import { useContext } from "react"
import HeaderContext from "../contexts/headerContext"
import { useNavigationList } from "./useNavigationList"

export const useHeader = () => {
    const menus = useNavigationList()
    const headerContext = useContext(HeaderContext)

    const updateSection = (location: string) => {
        const newMenu = menus.filter((menu) => menu.location == location)[0]
        if (!newMenu) return

        headerContext.setCurrentSection(newMenu)
    }

    return { ...headerContext, updateSection }
}
