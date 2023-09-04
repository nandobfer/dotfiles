import React from "react"
import { Button } from "@mui/material"

interface NewButtonProps {}

export const NewButton: React.FC<NewButtonProps> = ({}) => {
    return (
        <Button sx={{ borderRadius: "50%", position: "fixed" }} variant="contained">
            +
        </Button>
    )
}
