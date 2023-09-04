import React from "react"
import { Box, Drawer, useMediaQuery } from "@mui/material"
import { MenuButton } from "./MenuButton"
import { useSubmenu } from "../../hooks/useSubmenu"

interface SubmenuDrawerProps {}

export const SubmenuDrawer: React.FC<SubmenuDrawerProps> = ({}) => {
    const isMobile = useMediaQuery('orientation: "portrait"')
    const { close, isOpen, menu } = useSubmenu()

    return (
        <Drawer
            anchor={"left"}
            open={isOpen}
            onClose={close}
            sx={{ zIndex: 1201 }}
            PaperProps={{
                sx: { width: isMobile ? "80vw" : "40vw", backgroundColor: "background.paper", paddingTop: isMobile ? "6vw" : "" },
            }}
            hideBackdrop
        >
            <Box sx={{ flexDirection: "column", height: "80%" }}>
                {menu?.submenus?.map((menu) => (
                    <MenuButton menu={menu} key={menu.id} />
                ))}
            </Box>
        </Drawer>
    )
}
