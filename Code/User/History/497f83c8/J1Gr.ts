import { useContext } from "react"
import HeaderContext from "../contexts/headerContext"
import { useNavigationList } from "./useNavigationList"

export const useHeader = () => {
    const menus = useNavigationList()
    const headerContext = useContext(HeaderContext)

    const updateSection = (location: string) => {
        headerContext.setCurrentSection(menus.filter((menu) => menu.location == location)[0])
    }

    return { ...headerContext, updateSection }
}
