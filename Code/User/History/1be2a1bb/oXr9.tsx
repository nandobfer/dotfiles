import React from "react"
import { Avatar, Box, Drawer, TextField } from "@mui/material"
import { useZap } from "../hooks/useZap"
import { backdropStyle } from "../style/backdrop"
import { textFieldStyle } from "../style/textfield"
import { TaiTextField } from "./TaiTextField"
import { Form, Formik } from "formik"

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
                    gap: "1vw",
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
                        padding: "2vw",
                        color: "text.secondary",
                    }}
                >
                    a
                </Box>
                <Formik>
                    {({ values, handleChange }) => (
                        <Form>
                            <TextField
                                placeholder="envie uma mensagem"
                                sx={textFieldStyle}
                                InputProps={{ sx: { color: "primary.main", bgcolor: "background.default" } }}
                            />
                        </Form>
                    )}
                </Formik>
            </Box>
        </Drawer>
    )
}
