import React from "react"
import { Box, Drawer, MenuItem } from "@mui/material"
import { useMenuDrawer } from "../hooks/useMenuDrawer"
import { useUser } from "../hooks/useUser"
import { useNavigationList } from "../hooks/useNavigationList"

interface MenuDrawerProps {}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({}) => {
    const menus = useNavigationList()

    const { open, setOpen } = useMenuDrawer()
    const { user, logout } = useUser()

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Drawer anchor={"left"} open={open} onClose={handleClose} PaperProps={{ sx: { width: "80vw" } }}>
            <p>{user?.name}</p>
            <Box sx={{ flexDirection: "column" }}>
                {menus.map((menu) => (
                    <MenuItem key={menu.location}>{menu.title}</MenuItem>
                ))}
            </Box>
            <MenuItem
                sx={{ marginTop: "auto" }}
                onClick={() => {
                    handleClose()
                    logout()
                }}
            >
                Sair
            </MenuItem>
        </Drawer>
    )
}
