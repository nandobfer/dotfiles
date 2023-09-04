import { useContext } from "react"
import MenuContext from "../contexts/menuContext"

export const useMenu = () => {
    const menuContext = useContext(MenuContext)
    const { submenuDrawer } = menuContext

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

    const submenu = {
        open: submenuDrawer.open,
        toogle: () => submenuDrawer.setOpen(!submenuDrawer.open),
        close: () => submenuDrawer.setOpen(false),
    }

    return { drawer, submenu }
}
