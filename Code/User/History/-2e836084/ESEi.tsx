import React from "react"
import { Box } from "@mui/material"

interface TagProps {
    name: string
    style?: string
    variant: "producer" | "agent" | "shipping" | "ads" | "adm"
}

export const Tag: React.FC<TagProps> = ({ name, style, variant }) => {
    const colors = {
        producer: "#D2FFB6",
        agent: "#E2EAFF",
        shipping: "#FFFDC7",
        ads: "#F0C7FF",
        adm: "#FC5F5C",
    }

    return (
        <Box
            sx={{
                fontSize: `${style}`,
                width: "max-content",
                backgroundColor: `${colors[variant]}`,
                borderRadius: "7vw",
                padding: "1vw 2vw 1vw 2vw",
            }}
        >
            {name}
        </Box>
    )
}
