import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { useHeader } from "../../hooks/useHeader"
import { CategoriesList } from "./CategoriesList"
import { Banners } from "./Banners"
import { NearYouList } from "./NearYouList"
import { CropsList } from "./CropsList"

interface ShippingProps {}

export const Shipping: React.FC<ShippingProps> = ({}) => {
    const header = useHeader()

    const images = [
        "https://gringo.com.vc/wp-content/uploads/2021/11/licenciamento-de-caminhao-1024x683.jpeg",
        "https://mobilidade.estadao.com.br/wp-content/uploads/2022/10/Foto-1-Volvo.jpg",
    ]

    useEffect(() => {
        header.setTitle("Transportadoras")
    }, [])

    return (
        <Box
            sx={{
                flexDirection: "column",
                padding: "0 5vw",
                gap: "5vw",
                width: "100vw",
                height: "100%",
                overflowX: "hidden",
                justifyContent: "space-between",
            }}
        >
            <CategoriesList />
            <Banners images={images} />
            <NearYouList />
            <CropsList />
        </Box>
    )
}
