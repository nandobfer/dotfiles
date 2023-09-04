import { useContext } from "react"
import SubmenuContext from "../contexts/submenuContext"

export const useSubmenu = () => {
    const menuContext = useContext(SubmenuContext)
    const { submenu } = menuContext

    const isOpen = !!submenu.menu
    const menu = submenu.menu
    const open = (menu: Menu) => submenu.setMenu(menu)
    const close = () => submenu.setMenu()

    return { isOpen, menu, open, close }
}
