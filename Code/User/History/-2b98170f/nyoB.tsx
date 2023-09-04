import React from "react"
import { Box, Drawer, MenuItem, SxProps } from "@mui/material"
import { useUser } from "../hooks/useUser"
import { backdropStyle } from "../style/backdrop"
import { ModeToggler } from "./ModeToggler"
import { Avatar } from "./Avatar"

interface UserDrawerProps {}

export const UserDrawer: React.FC<UserDrawerProps> = ({}) => {
    const { user, drawer } = useUser()

    const handleClose = () => {
        drawer.close()
    }

    return (
        <Drawer
            anchor={"right"}
            open={drawer.open}
            onClose={handleClose}
            PaperProps={{ sx: { width: "22vw", backgroundColor: "background.paper" } }}
            ModalProps={{ BackdropProps: { sx: backdropStyle } }}
        >
            <Box sx={{ padding: "2vw", flexDirection: "column", gap: "1vw", width: "100%", alignItems: "center" }} color={"secondary.main"}>
                <Avatar user={user} size="10vw" />
                <p style={{ fontWeight: "bold" }}>{user?.name}</p>
            </Box>
            <Box sx={{ flexDirection: "column" }}></Box>

            <ModeToggler bottom={0} right="6vw" />
        </Drawer>
    )
}
