import { Box, IconButton, SxProps } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import NotificationsIcon from "@mui/icons-material/Notifications"

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    const iconStyle: SxProps = {
        width: "10vw",
        height: "auto",
    }

    return (
        <Box sx={{ justifyContent: "space-between", width: "100vw", padding: "5vw" }}>
            <IconButton color="primary">
                <MenuIcon sx={iconStyle} />
            </IconButton>
            <IconButton color="primary">
                <NotificationsIcon sx={iconStyle} />
            </IconButton>
        </Box>
    )
}
