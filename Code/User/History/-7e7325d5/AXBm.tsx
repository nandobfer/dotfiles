import { Avatar, Box } from "@mui/material"
import React from "react"

interface BannersProps {}

export const Banners: React.FC<BannersProps> = ({}) => {
    const images = [
        "https://imagens-cdn.canalrural.com.br/wp-content/uploads/safra-do-ibge-2023-erdenrson-araujo-trilux-cna.jpg",
        "https://www.portaldoagronegocio.com.br/img/cache/cover//storage/images/notices/607452f8cbeeb.jpg",
    ]
    return (
        <Box sx={{ width: "100vw", overflowX: "auto", gap: "3vw", paddingRight: "10vw" }}>
            {images.map((image) => (
                <Avatar key={image} variant="rounded" src={image} sx={{ width: "80vw", height: "40vw", borderRadius: "5vw" }} />
            ))}
        </Box>
    )
}
