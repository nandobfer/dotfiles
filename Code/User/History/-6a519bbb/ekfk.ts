import { useContext } from "react"
import MenuDrawerContext from "../contexts/menuDrawerContext"

export const useMenuDrawer = () => {
    const menuDrawerContext = useContext(MenuDrawerContext)

    return { ...menuDrawerContext }
}
