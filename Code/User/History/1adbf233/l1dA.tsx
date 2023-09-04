import React from "react"
import { Button } from "@mui/material"

interface NewButtonProps {
    onClick: () => void
    top?: string | number
    left?: string | number
    bottom?: string | number
    right?: string | number
}

export const NewButton: React.FC<NewButtonProps> = ({ top, left, bottom, right, onClick }) => {
    return (
        <Button sx={{ borderRadius: "50%", position: "fixed", top, left, bottom, right }} variant="contained" onClick={onClick}>
            +
        </Button>
    )
}