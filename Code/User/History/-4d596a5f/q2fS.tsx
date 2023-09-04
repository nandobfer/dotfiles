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
        <Box sx={{ justifyContent: "space-between", width: "100%", alignItems: "center", padding: "5vw", fontSize: "6vw" }}>
            <IconButton color="primary">
                <MenuIcon sx={iconStyle} />
            </IconButton>
            <p style={{ fontWeight: "bolder" }}>{header.title}</p>
            <IconButton color="primary">
                <NotificationsIcon sx={iconStyle} />
            </IconButton>
        </Box>
    )
}
