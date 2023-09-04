import { Box, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <Box sx={{ justifyContent: "space-between", padding: "5vw" }}>
            <IconButton color="primary">
                <MenuIcon />
            </IconButton>
        </Box>
    )
}
