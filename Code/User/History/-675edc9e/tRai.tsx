import React from "react"
import { Avatar, Box, IconButton, SxProps, TextField } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import SearchIcon from "@mui/icons-material/Search"
import { useUser } from "../hooks/useUser"
import { useDarkMode } from "../hooks/useDarkMode"
import { useColors } from "../hooks/useColors"
import logo from "../assets/logo.png"
import { useMenu } from "../hooks/useMenu"
import { textFieldStyle } from "../style/textfield"

interface HeaderProps {
    user: User
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
    const userDrawer = useUser().drawer
    const menuDrawer = useMenu().drawer

    const { darkMode } = useDarkMode()
    const colors = useColors()

    const iconButtonStyle: SxProps = {
        width: "4vw",
        height: "4vw",
    }

    const iconStyle: SxProps = { height: "100%", width: "100%" }

    const containerStyle: SxProps = {
        gap: "1vw",
        alignItems: "center",
        color: "secondary.main",
        fontWeight: "bold",
    }

    return (
        <Box
            sx={{
                height: "10vh",
                width: "100vw",
                backgroundColor: "background.paper",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1vw",
                gap: "2vw",
            }}
        >
            <Box sx={containerStyle}>
                <IconButton color={"secondary"} sx={iconButtonStyle} onClick={() => menuDrawer.toogle()}>
                    <MenuIcon sx={iconStyle} />
                </IconButton>
                <img src={logo} alt="boz" style={{ width: "3.5vw" }} />
            </Box>

            <Box sx={{ flex: 1 }}>
                <TextField
                    placeholder="pesquisar"
                    color={"secondary"}
                    sx={textFieldStyle}
                    InputProps={{
                        color: "secondary",
                        sx: { color: darkMode ? "text.primary" : "secondary.main", gap: "0.5vw" },
                        startAdornment: <SearchIcon />,
                    }}
                    InputLabelProps={{ color: "secondary" }}
                    variant="standard"
                    autoComplete="off"
                />
            </Box>

            <Box sx={containerStyle}>
                <p>{user.name}</p>
                <IconButton color={"secondary"} sx={iconButtonStyle} onClick={() => userDrawer.toogle()}>
                    <Avatar src={user.id} sx={iconStyle} />
                </IconButton>
            </Box>
        </Box>
    )
}