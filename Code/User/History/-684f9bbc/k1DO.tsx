import React from "react"
import { Box, Drawer, IconButton, MenuItem, SxProps } from "@mui/material"
import { useMenuDrawer } from "../hooks/useMenuDrawer"
import { useUser } from "../hooks/useUser"
import { useNavigationList } from "../hooks/useNavigationList"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import { UserCard } from "./UserCard"
import { useNavigate } from "react-router-dom"

interface MenuDrawerProps {}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({}) => {
    const menus = useNavigationList()
    const navigate = useNavigate()

    const { open, setOpen } = useMenuDrawer()
    const { user, logout } = useUser()

    const iconStyle: SxProps = {
        width: "7vw",
        height: "auto",
    }

    const iconButtonStyle: SxProps = { border: "0.5vw solid black", borderRadius: "100%" }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Drawer anchor={"left"} open={open} onClose={handleClose} PaperProps={{ sx: { width: "80vw" } }}>
            <Box sx={{ justifyContent: "space-between", width: "100%", padding: "5vw" }}>
                <IconButton color="primary" sx={iconButtonStyle} onClick={handleClose}>
                    <KeyboardBackspaceIcon sx={iconStyle} />
                </IconButton>

                <Box sx={{ gap: "3vw", alignItems: "center" }}>
                    Ajuda
                    <IconButton color="primary" sx={iconButtonStyle}>
                        <QuestionMarkIcon sx={iconStyle} />
                    </IconButton>
                </Box>
            </Box>

            <UserCard user={user!} />

            <Box sx={{ flexDirection: "column" }}>
                {menus.map((menu) => (
                    <MenuItem key={menu.location} onClick={() => navigate(menu.location)} sx={{ fontSize: "5vw" }}>
                        {menu.title}
                    </MenuItem>
                ))}
            </Box>
            <MenuItem
                sx={{ marginTop: "auto", fontSize: "5vw" }}
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
