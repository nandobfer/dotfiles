import React from "react"
import { Avatar, Box, Drawer, MenuItem, SxProps } from "@mui/material"
import { useMenu } from "../../hooks/useMenu"
import { backdropStyle } from "../../style/backdrop"
import logo from "../../assets/logo.png"
import { useUser } from "../../hooks/useUser"
import { useNavigate } from "react-router-dom"
import { MenuButton } from "./MenuButton"
import LogoutIcon from "@mui/icons-material/Logout"
import { useMediaQuery } from "@mui/material"
import { useSubmenu } from "../../hooks/useSubmenu"

interface MenuDrawerProps {}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({}) => {
    const isMobile = useMediaQuery('orientation: "portrait"')
    const navigate = useNavigate()

    const { drawer } = useMenu()
    const submenu = useSubmenu()
    const { user, logout } = useUser()

    return (
        <Drawer
            anchor={"left"}
            open={drawer.open}
            onClose={drawer.close}
            PaperProps={{
                sx: { width: isMobile ? "80vw" : "22vw", backgroundColor: "background.paper", paddingTop: isMobile ? "6vw" : "" },
            }}
            ModalProps={{ BackdropProps: { sx: backdropStyle }, sx: { pointerEvents: submenu.isOpen ? "none" : "auto" } }}
            hideBackdrop={submenu.isOpen}
        >
            <Box
                sx={{ padding: isMobile ? "6vw" : "2vw", flexDirection: "column", gap: "1vw", width: "100%", alignItems: "center" }}
                color={"text.secondary"}
            >
                <img src={logo} style={{ width: "10vw" }} />
            </Box>
            <Box sx={{ flexDirection: "column", height: "80%" }}>
                {drawer.menus.map((menu) => (
                    <MenuButton menu={menu} key={menu.id} />
                ))}
                <MenuButton
                    menu={{ id: 0, name: "sair", path: "/login", icon: <LogoutIcon />, onClick: () => logout() }}
                    sx={{ marginTop: "auto" }}
                />
            </Box>
        </Drawer>
    )
}
