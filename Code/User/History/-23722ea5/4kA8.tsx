import React from "react"
import { Box, alpha, darken, lighten } from "@mui/material"
import { useColors } from "../hooks/useColors"
import { useDarkMode } from "../hooks/useDarkMode"

interface TagProps {
    name: string
    style?: string
    variant?: string
}

export const Tag: React.FC<TagProps> = ({ name, style, variant = "default" }) => {
    const colors = useColors()
    const { darkMode } = useDarkMode()

    const color = {
        dev: "#D2FFB6",
        agent: "#E2EAFF",
        shipping: "#FFFDC7",
        business: "#F0C7FF",
        store: "#F0C7FF",
        service: "#C7FFF5",
        adm: "#FC5F5C",
    }

    return (
        <Box
            sx={{
                fontSize: `${style}`,
                width: "max-content",
                backgroundColor: darkMode ? darken(colors.primary, 0.4) : lighten(colors.primary, 0.4),
                //backgroundColor: `${colors[variant]}`,
                borderRadius: "7vw",
                padding: "0.5vw",
                color: colors.secondary,
            }}
        >
            {name}
        </Box>
    )
}
