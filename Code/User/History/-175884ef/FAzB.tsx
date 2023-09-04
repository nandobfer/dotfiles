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

    const [collapse, setCollapse] = useState(false)

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
        } else {
            setCollapse(true)
        }
    }

    return (
        <>
            <MenuItem key={menu.id} sx={menuItemStyle} onClick={() => handleMenuClick(menu)}>
                <Icon />
                {menu.name}
            </MenuItem>

            <Collapse in={collapse}>
                <Box sx={{ flexDirection: "column" }}>
                    {menu.submenus?.map((menu) => (
                        <MenuItem key={menu.id} sx={menuItemStyle} onClick={() => handleMenuClick(menu)}>
                            <Icon />
                            {menu.name}
                        </MenuItem>
                    ))}
                </Box>
            </Collapse>
        </>
    )
}
