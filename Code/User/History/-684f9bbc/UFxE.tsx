import React from "react"
import { Box, Drawer, IconButton, MenuItem, SxProps } from "@mui/material"
import { useMenuDrawer } from "../hooks/useMenuDrawer"
import { useUser } from "../hooks/useUser"
import { useNavigationList } from "../hooks/useNavigationList"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"

interface MenuDrawerProps {}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({}) => {
    const menus = useNavigationList()

    const { open, setOpen } = useMenuDrawer()
    const { user, logout } = useUser()

    const iconStyle: SxProps = {
        width: "10vw",
        height: "auto",
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Drawer anchor={"left"} open={open} onClose={handleClose} PaperProps={{ sx: { width: "80vw" } }}>
            <Box sx={{ justifyContent: "space-between", width: "100%", padding: "5vw" }}>
                <IconButton color="primary">
                    <KeyboardBackspaceIcon sx={iconStyle} />
                </IconButton>
            </Box>
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
