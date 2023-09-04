import React from "react"
import { Box, Drawer, useMediaQuery } from "@mui/material"
import { useMenu } from "../../hooks/useMenu"
import { MenuButton } from "./MenuButton"

interface SubmenuDrawerProps {
    menu: Menu
}

export const SubmenuDrawer: React.FC<SubmenuDrawerProps> = ({ menu }) => {
    const isMobile = useMediaQuery('orientation: "portrait"')
    const { submenu: drawer } = useMenu()

    return (
        <Drawer
            anchor={"left"}
            open={drawer.menu}
            onClose={drawer.close}
            PaperProps={{ sx: { width: isMobile ? "80vw" : "40vw", backgroundColor: "background.paper", paddingTop: isMobile ? "6vw" : "" } }}
            hideBackdrop
        >
            <Box sx={{ flexDirection: "column", height: "80%" }}>
                {menu.submenus?.map((menu) => (
                    <MenuButton menu={menu} key={menu.id} />
                ))}
            </Box>
        </Drawer>
    )
}
