import { useContext } from "react"
import MenuContext from "../contexts/menuContext"
import { useSubmenu } from "./useSubmenu"

export const useMenu = () => {
    const menuContext = useContext(MenuContext)
    const submenu = useSubmenu()

    const close = () => {
        menuContext.drawer.setOpen(false)
        submenu.close()
    }

    const drawer = {
        open: menuContext.drawer.open,
        menus: menuContext.drawer.menus,
        toogle: () => menuContext.drawer.setOpen(!menuContext.drawer.open),
        close,
    }

    return { drawer }
}
