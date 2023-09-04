import { Avatar, Box } from "@mui/material"
import React from "react"

interface BannersProps {
    images: string[]
}

export const Banners: React.FC<BannersProps> = ({ images }) => {
    return (
        <Box sx={{ width: "100vw", overflowX: "auto", gap: "3vw", paddingRight: "10vw" }}>
            {images.map((image) => (
                <Avatar key={image} variant="rounded" src={image} sx={{ width: "80vw", height: "40vw", borderRadius: "5vw" }} />
            ))}
        </Box>
    )
}
