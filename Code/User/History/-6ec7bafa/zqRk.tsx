import React from "react"
import { Box, Drawer, useMediaQuery } from "@mui/material"
import { useMenu } from "../../hooks/useMenu"

interface SubmenuDrawerProps {}

export const SubmenuDrawer: React.FC<SubmenuDrawerProps> = ({}) => {
    const isMobile = useMediaQuery('orientation: "portrait"')
    const { submenu: drawer } = useMenu()

    return (
        <Drawer
            anchor={"left"}
            open={drawer.open}
            onClose={drawer.close}
            PaperProps={{ sx: { width: isMobile ? "80vw" : "22vw", backgroundColor: "background.paper", paddingTop: isMobile ? "6vw" : "" } }}
            hideBackdrop
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
