import { useContext } from "react"
import MenuContext from "../contexts/menuContext"

export const useMenu = () => {
    const menuContext = useContext(MenuContext)

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
        isOpen: !!submenuDrawer.open,
        menu: submenuDrawer.open,
        open: (menu: Menu) => submenuDrawer.setOpen(menu),
        close: () => submenuDrawer.setOpen(),
    }

    return { drawer, submenu }
}
