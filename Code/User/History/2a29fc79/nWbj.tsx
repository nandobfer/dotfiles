import React from "react"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import { useCustomers } from "../hooks/useCustomers"

interface NewServiceModalProps {}

export const NewServiceModal: React.FC<NewServiceModalProps> = ({}) => {
    const { serviceModal } = useCustomers()
    const {} = serviceModal

    return (
        <Dialog open={open} onClose={handleClose}>
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
