import React from "react"
import { Button } from "@mui/material"
import zIndex from "@mui/material/styles/zIndex"

interface NewButtonProps {
    onClick: () => void
    top?: string | number
    left?: string | number
    bottom?: string | number
    right?: string | number
    icon?: React.ReactElement
    color?: string
}

export const NewButton: React.FC<NewButtonProps> = ({ top, left, bottom, right, onClick, icon, color }) => {
    const Icon = () => icon || <></>

    return (
        <Button
            sx={{
                borderRadius: "50%",
                position: "absolute",
                top,
                left,
                bottom,
                right,
                color: color || "secondary.main",
                width: "3vw",
                height: "4vw",
                zIndex: 2,
            }}
            variant="contained"
            onClick={onClick}
        >
            <Icon />
        </Button>
    )
}
