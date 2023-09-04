import React from "react"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"

interface NewServiceModalProps {}

export const NewServiceModal: React.FC<NewServiceModalProps> = ({}) => {
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
