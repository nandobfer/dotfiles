import { useContext } from "react"
import MenuContext from "../contexts/menuContext"

export const useSubmenu = () => {
    const menuContext = useContext(MenuContext)
    const { submenuDrawer } = menuContext

    const submenu = {
        isOpen: !!submenuDrawer?.open,
        menu: submenuDrawer.open,
        open: (menu: Menu) => submenuDrawer.setOpen(menu),
        close: () => submenuDrawer.setOpen(),
    }

    return { submenu }
}
