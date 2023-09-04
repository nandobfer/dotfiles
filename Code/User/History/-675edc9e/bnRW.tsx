import React from "react"
import { Box, IconButton, SxProps, TextField } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import SearchIcon from "@mui/icons-material/Search"
import { useUser } from "../hooks/useUser"
import { useDarkMode } from "../hooks/useDarkMode"

interface HeaderProps {
    user: User
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
    const userDrawer = useUser().drawer

    const { darkMode } = useDarkMode()

    const iconButtonStyle: SxProps = {
        width: "4vw",
        height: "4vw",
    }

    const iconStyle: SxProps = { height: "100%", width: "100%" }

    const containerStyle: SxProps = { gap: "1vw", alignItems: "center", color: darkMode ? "primary.main" : "secondary.main", fontWeight: "bold" }

    return (
        <Box
            sx={{
                height: "10vh",
                width: "100vw",
                backgroundColor: darkMode ? "background.paper" : "primary.main",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1vw",
            }}
        >
            <Box sx={containerStyle}>
                <IconButton color={darkMode ? "text.primary.main" : "secondary"} sx={iconButtonStyle}>
                    <MenuIcon sx={iconStyle} />
                </IconButton>
                <p>Agência Boz</p>
            </Box>

            <TextField
                label="pesquisar"
                color={darkMode ? "primary" : "secondary"}
                sx={{ width: "50vw", color: darkMode ? "primary.main" : "secondary.main" }}
                InputProps={{
                    color: darkMode ? "primary" : "secondary",
                    sx: { color: darkMode ? "primary.main" : "secondary.main", gap: "0.5vw" },
                    startAdornment: <SearchIcon />,
                }}
                InputLabelProps={{ color: darkMode ? "primary" : "secondary" }}
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