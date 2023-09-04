import { Box } from "@mui/material"
import React from "react"

interface CarouselContainerProps {}

export const CarouselContainer: React.FC<CarouselContainerProps> = ({}) => {
    const images = [
        "https://imagens-cdn.canalrural.com.br/wp-content/uploads/safra-do-ibge-2023-erdenrson-araujo-trilux-cna.jpg",
        "https://www.portaldoagronegocio.com.br/img/cache/cover//storage/images/notices/607452f8cbeeb.jpg",
    ]
    return <Box sx={{ width: "100vw", overflowX: "auto" }}></Box>
}
