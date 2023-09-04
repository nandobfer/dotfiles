import React from "react"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import { useCustomers } from "../hooks/useCustomers"

interface NewServiceModalProps {}

export const NewServiceModal: React.FC<NewServiceModalProps> = ({}) => {
    const { serviceModal } = useCustomers()
    const { isOpen, close } = serviceModal

    const handleClose = () => {
        close()
    }

    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            sx={{ width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center" }}
            BackdropProps={{ sx: backdropStyle }}
        >
            <DialogTitle>Novo serviço</DialogTitle>
            <DialogContent>
                <DialogContentText>Nome e tag do serviço</DialogContentText>
                <TextField autoFocus margin="dense" id="name" label="Email Address" type="email" fullWidth variant="standard" />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    )
}
