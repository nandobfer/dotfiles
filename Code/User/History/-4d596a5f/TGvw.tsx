import { Box, IconButton, SxProps } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import NotificationsIcon from "@mui/icons-material/Notifications"
import { useHeader } from "../hooks/useHeader"
import { useMenuDrawer } from "../hooks/useMenuDrawer"
import { useNotifications } from "../hooks/useNotifications"

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    const header = useHeader()
    const notifications = useNotifications()
    const menuDrawer = useMenuDrawer()

    const iconStyle: SxProps = {
        width: "10vw",
        height: "auto",
    }

    return (
        <Box sx={{ justifyContent: "space-between", width: "100%", alignItems: "center", padding: "5vw", fontSize: "5vw", fontWeight: "bold" }}>
            <IconButton color="primary" onClick={menuDrawer.toggle}>
                <MenuIcon sx={iconStyle} />
            </IconButton>
            <p>{header.title}</p>
            <IconButton color="primary" onClick={notifications.toggle}>
                <NotificationsIcon sx={iconStyle} />
            </IconButton>
        </Box>
    )
}
