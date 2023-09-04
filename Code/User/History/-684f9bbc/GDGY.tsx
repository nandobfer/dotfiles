import React from "react"
import { Box, Drawer, IconButton, MenuItem, SxProps } from "@mui/material"
import { useMenuDrawer } from "../hooks/useMenuDrawer"
import { useUser } from "../hooks/useUser"
import { useNavigationList } from "../hooks/useNavigationList"
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import { UserCard } from "./UserCard"
import { useNavigate } from "react-router-dom"
import { backdropStyle } from "../style/backdrop"
import { UserStats } from "./UserStats"

interface MenuDrawerProps {}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({}) => {
    const menus = useNavigationList()
    const navigate = useNavigate()

    const { open, setOpen } = useMenuDrawer()
    const { user, logout } = useUser()

    const iconStyle: SxProps = {
        width: "3.5vw",
        height: "auto",
    }

    const iconButtonStyle: SxProps = { border: "0.5vw solid black", borderRadius: "100%" }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Drawer
            anchor={"left"}
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: { width: "80vw", overflowX: "hidden" } }}
            ModalProps={{ BackdropProps: { sx: backdropStyle } }}
        >
            <Box sx={{ justifyContent: "space-between", width: "100%", padding: "5vw" }}>
                <IconButton color="primary" sx={iconButtonStyle} onClick={handleClose}>
                    <KeyboardBackspaceIcon sx={iconStyle} />
                </IconButton>

                <Box sx={{ gap: "1.8vw", alignItems: "center", fontSize: "3.3vw" }}>
                    Ajuda
                    <IconButton color="primary" sx={iconButtonStyle}>
                        <QuestionMarkIcon sx={iconStyle} />
                    </IconButton>
                </Box>
            </Box>

            <UserCard user={user!} />
            <UserStats user={user!} sx={{ border: `1px solid gray`, padding: "4vw" }} />

            <Box sx={{ flexDirection: "column", paddingTop: "5vw" }}>
                {menus
                    .filter((item) => !item.hidden)
                    .map((menu) => (
                        <MenuItem
                            key={menu.location}
                            onClick={() => {
                                handleClose()
                                navigate(menu.location)
                            }}
                            sx={{ fontSize: "5vw", alignItems: "center" }}
                        >
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
