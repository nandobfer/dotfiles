import React, { useState } from "react"
import { Box, Collapse, MenuItem, SxProps } from "@mui/material"
import { useMenu } from "../../hooks/useMenu"
import { useLocation } from "react-router-dom"

interface MenuButtonProps {
    menu: Menu
    sx?: SxProps
}

export const MenuButton: React.FC<MenuButtonProps> = ({ menu, sx }) => {
    const Icon = () => menu.icon
    const location = useLocation()
    const active = location.pathname.split("/")[1] == menu.path.split("/")[1]

    const { drawer } = useMenu()

    const [collapse, setCollapse] = useState(active)

    const menuItemStyle: SxProps = {
        backgroundColor: active ? "secondary.main" : "",
        color: active ? "background.paper" : "secondary.main",
        pointerEvents: active ? "none" : "auto",
        fontWeight: "bold",
        gap: "1vw",
        ...sx,
    }

    const handleMenuClick = (menu: Menu) => {
        if (!menu.submenus) {
            drawer.close()
            menu.onClick()
        } else {
            setCollapse((collapse) => !collapse)
        }
    }

    return (
        <>
            <MenuItem key={menu.id} sx={menuItemStyle} onClick={() => handleMenuClick(menu)}>
                <Icon />
                {menu.name}
            </MenuItem>

            <Collapse in={collapse}>
                <Box sx={{ flexDirection: "column", width: "100%" }}>
                    {menu.submenus?.map((menu) => {
                        const Icon = () => menu.icon

                        return (
                            <MenuItem key={menu.id} sx={{ ...menuItemStyle, paddingLeft: "3vw" }} onClick={() => handleMenuClick(menu)}>
                                <Icon />
                                {menu.name}
                            </MenuItem>
                        )
                    })}
                </Box>
            </Collapse>
        </>
    )
}
