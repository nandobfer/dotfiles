import { useContext } from "react"
import HeaderContext from "../contexts/headerContext"
import { useNavigationList } from "./useNavigationList"

export const useHeader = () => {
    const menus = useNavigationList()
    const headerContext = useContext(HeaderContext)

    const updateSection = (section: MenusList) => {
        const newMenu = menus.
        if (!newMenu) return

        headerContext.setCurrentSection(newMenu)
    }

    return { ...headerContext, updateSection }
}
