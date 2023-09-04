import React from "react"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, AlertColor } from "@mui/material"
import { styles } from "./styles"
import { useConfirmDialog } from "burgos-confirm"

interface ConfirmDialogProps {
    color?: AlertColor
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ color = "primary" }) => {
    const { open, setOpen, title, content, onConfirm, button } = useConfirmDialog()

    const handleClose = () => {
        setOpen(false)
    }

    const confirm = () => {
        onConfirm()
        handleClose()
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{ ...styles.dialog }}
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button variant="contained" onClick={confirm} autoFocus>
                    {button}
                </Button>
            </DialogActions>
        </Dialog>
    )
}
