import { Box, IconButton, SxProps } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    const iconStyle: SxProps = {
        width: "50vw",
    }
    return (
        <Box sx={{ justifyContent: "space-between", padding: "5vw" }}>
            <IconButton color="primary">
                <MenuIcon sx={iconStyle} />
            </IconButton>
        </Box>
    )
}
