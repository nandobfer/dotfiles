import { useContext } from "react"
import SubmenuContext from "../contexts/submenuContext"

export const useSubmenu = () => {
    const menuContext = useContext(SubmenuContext)
    const { submenu } = menuContext

    const isOpen = !!submenu.open
    const submenu = {
        menu: submenu.open,
        open: (menu: Menu) => submenu.setOpen(menu),
        close: () => submenu.setOpen(),
    }

    return { submenu }
}
