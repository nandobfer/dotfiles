import React from "react"
import { Box, Chip, SxProps, alpha, darken, lighten } from "@mui/material"
import { useColors } from "../hooks/useColors"
import { useDarkMode } from "../hooks/useDarkMode"

interface TagProps {
    name: string
    sx?: SxProps
    fontSize?: string
    variant?: string
    onClick?: (id: number) => void
    onDelete?: (id: number) => void
}

export const Tag: React.FC<TagProps> = ({ name, fontSize, sx, onClick, onDelete, variant = "default" }) => {
    const colors = useColors()
    const { darkMode } = useDarkMode()

    return (
        <Chip
            label={name}
            color="primary"
            clickable={!!onClick}
            onDelete={onDelete}
            sx={{
                fontSize: `${fontSize}`,
                // width: "max-content",
                backgroundColor: darkMode ? darken(colors.primary, 0.4) : lighten(colors.primary, 0.4),
                //backgroundColor: `${colors[variant]}`,
                // borderRadius: "7vw",
                // padding: "0.5vw",
                color: colors.secondary,
                justifyContent: "center",
                alignItems: "center",
                ...sx,
            }}
        />
    )
}
