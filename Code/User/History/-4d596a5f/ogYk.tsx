import { Box, IconButton, SxProps } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import NotificationsIcon from "@mui/icons-material/Notifications"
import { useHeader } from "../hooks/useHeader"

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    const header = useHeader()

    const iconStyle: SxProps = {
        width: "10vw",
        height: "auto",
    }

    return (
        <Box sx={{ justifyContent: "space-between", width: "100%", alignItems: "center", padding: "5vw", fontSize: "5vw", fontWeight: "bold" }}>
            <IconButton color="primary">
                <MenuIcon sx={iconStyle} />
            </IconButton>
            <p>{header.title}</p>
            <IconButton color="primary">
                <NotificationsIcon sx={iconStyle} />
            </IconButton>
        </Box>
    )
}
