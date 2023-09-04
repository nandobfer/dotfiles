import { useContext } from "react"
import SubmenuContext from "../contexts/submenuContext"

export const useSubmenu = () => {
    const menuContext = useContext(SubmenuContext)
    const { submenu } = menuContext

    const submenu = {
        isOpen: !!submenu.open,
        menu: submenu.open,
        open: (menu: Menu) => submenu.setOpen(menu),
        close: () => submenu.setOpen(),
    }

    return { submenu }
}
