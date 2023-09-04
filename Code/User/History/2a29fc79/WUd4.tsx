import React from "react"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import { useCustomers } from "../hooks/useCustomers"
import { backdropStyle } from "../style/backdrop"
import { Form, Formik } from "formik"

interface NewServiceModalProps {}

export const NewServiceModal: React.FC<NewServiceModalProps> = ({}) => {
    const { serviceModal } = useCustomers()
    const { isOpen, close } = serviceModal

    const initialValues: ServiceForm = {
        name: "",
        tag: "",
    }

    const handleNewService = (values: ServiceForm) => {
        alert(JSON.stringify(values))
    }

    const handleClose = () => {
        close()
    }

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            sx={{ width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center" }}
            BackdropProps={{ sx: backdropStyle }}
            PaperProps={{ sx: { bgcolor: "background.default" } }}
        >
            <DialogTitle>Novo serviço</DialogTitle>
            <Box sx={{ flexDirection: "column", padding: "2vw", width: "30vw" }}>
                <Formik initialValues={initialValues} onSubmit={handleNewService}>
                    {({ values, handleChange }) => (
                        <Form>
                            <TextField label="nome" name="name" value={values.name} onChange={handleChange} variant="standard" sx={{}} />
                            <TextField label="tag" name="tag" value={values.tag} onChange={handleChange} variant="standard" sx={{}} />

                            <Box sx={{ alignSelf: "flex-end", marginTop: "2vw", gap: "1vw" }}>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button type="submit" variant="contained">
                                    Subscribe
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Box>
        </Dialog>
    )
}
