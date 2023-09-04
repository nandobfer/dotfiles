import React from "react"
import { Box, IconButton, SxProps, TextField } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import SearchIcon from "@mui/icons-material/Search"
import { useUser } from "../hooks/useUser"
import { useDarkMode } from "../hooks/useDarkMode"
import { useColors } from "../hooks/useColors"

interface HeaderProps {
    user: User
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
    const userDrawer = useUser().drawer

    const { darkMode } = useDarkMode()
    const colors = useColors()

    const iconButtonStyle: SxProps = {
        width: "4vw",
        height: "4vw",
    }

    const iconStyle: SxProps = { height: "100%", width: "100%" }

    const containerStyle: SxProps = { gap: "1vw", alignItems: "center", color: darkMode ? colors.text.primary : "secondary.main", fontWeight: "bold" }

    return (
        <Box
            sx={{
                height: "10vh",
                width: "100vw",
                backgroundColor: darkMode ? colors.backgroundDark : "primary.main",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1vw",
            }}
        >
            <Box sx={containerStyle}>
                <IconButton color={darkMode ? "info" : "secondary"} sx={iconButtonStyle}>
                    <MenuIcon sx={iconStyle} />
                </IconButton>
                <p>Agência Boz</p>
            </Box>

            <TextField
                label="pesquisar"
                color={darkMode ? "info" : "secondary"}
                sx={{ width: "50vw", color: darkMode ? "info" : "secondary.main" }}
                InputProps={{
                    color: darkMode ? "info" : "secondary",
                    sx: { color: darkMode ? "info" : "secondary.main", gap: "0.5vw" },
                    startAdornment: <SearchIcon />,
                }}
                InputLabelProps={{ color: darkMode ? "info" : "secondary" }}
                variant="standard"
                autoComplete="off"
            />

            <Box sx={containerStyle}>
                <p>{user.name}</p>
                <IconButton color={darkMode ? "primary" : "secondary"} sx={iconButtonStyle} onClick={() => userDrawer.toogle()}>
                    <AccountCircleIcon sx={iconStyle} />
                </IconButton>
            </Box>
        </Box>
    )
}
