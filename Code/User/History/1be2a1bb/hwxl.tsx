import React from "react"
import { Avatar, Box, Drawer } from "@mui/material"
import { useZap } from "../hooks/useZap"
import { backdropStyle } from "../style/backdrop"

interface ZapDrawerProps {
    chat?: Chat
}

export const ZapDrawer: React.FC<ZapDrawerProps> = ({ chat }) => {
    const { drawer } = useZap()

    const handleClose = () => {
        drawer.close()
    }

    return (
        <Drawer
            anchor={"right"}
            open={drawer.open}
            onClose={handleClose}
            PaperProps={{ sx: { width: "50vw", backgroundColor: "background.default" } }}
            ModalProps={{ BackdropProps: { sx: backdropStyle } }}
        >
            <Box
                sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                    height: "100vh",
                    padding: "1vw",
                    color: "secondary.main",
                    gap: "2vw",
                    flexDirection: "column",
                    overflow: "hidden",
                }}
            >
                <Box sx={{ gap: "2vw", alignItems: "center", height: "5vh" }}>
                    <Avatar src={chat?.profilePic} sx={{ width: "3vw", height: "3vw" }} />
                    <p style={{ fontWeight: "bold" }}>{chat?.name}</p>
                </Box>

                <Box
                    sx={{
                        width: "100%",
                        height: "80vh",
                        bgcolor: "background.default",
                        overflowY: "auto",
                        borderRadius: "1.5vw",
                        padding: "1vw",
                        color: "text.secondary",
                    }}
                >
                    a
                </Box>
            </Box>
        </Drawer>
    )
}
