import React from "react"
import { Box, Drawer, useMediaQuery } from "@mui/material"
import { MenuButton } from "./MenuButton"
import { useSubmenu } from "../../hooks/useSubmenu"
import { backdropStyle } from "../../style/backdrop"

interface SubmenuDrawerProps {}

export const SubmenuDrawer: React.FC<SubmenuDrawerProps> = ({}) => {
    const isMobile = useMediaQuery('orientation: "portrait"')
    const { close, isOpen, menu } = useSubmenu()

    return (
        <Drawer
            anchor={"left"}
            open={isOpen}
            onClose={close}
            sx={{ zIndex: 1199 }}
            PaperProps={{
                sx: { width: isMobile ? "80vw" : "44vw", backgroundColor: "background.paper", paddingTop: isMobile ? "6vw" : "" },
            }}
            ModalProps={{ BackdropProps: { sx: backdropStyle } }}
        >
            <Box sx={{ flexDirection: "column", height: "100%", paddingLeft: "22vw" }}>
                {menu?.submenus?.map((menu) => (
                    <MenuButton menu={menu} key={menu.id} />
                ))}
            </Box>
        </Drawer>
    )
}
