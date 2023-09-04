import React from "react"
import { Box, Drawer, MenuItem } from "@mui/material"
import { useNotifications } from "../hooks/useNotifications"

interface NotificationsProps {}

export const Notifications: React.FC<NotificationsProps> = ({}) => {
    const { open, setOpen } = useNotifications()

    const handleClose = () => {
        setOpen(false)
    }

    return <Drawer anchor={"right"} open={open} onClose={handleClose} PaperProps={{ sx: { width: "80vw" } }}></Drawer>
}
