import React from "react"
import { Box, Drawer, MenuItem } from "@mui/material"
import { useNotifications } from "../hooks/useNotifications"
import { useUser } from "../hooks/useUser"

interface NotificationsProps {}

export const Notifications: React.FC<NotificationsProps> = ({}) => {
    const { open, setOpen } = useNotifications()
    const { user, logout } = useUser()

    const handleClose = () => {
        setOpen(false)
    }

    return <Drawer anchor={"right"} open={open} onClose={handleClose} PaperProps={{ sx: { width: "80vw" } }}></Drawer>
}
