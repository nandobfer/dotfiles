import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { useCrops } from "../../hooks/useCrops"
import { useHeader } from "../../hooks/useHeader"
import { CategoriesList } from "./CategoriesList"
import { Banners } from "./Banners"
import { NearYouList } from "./NearYouList"
import { CropsList } from "./CropsList"

interface CropsProps {}

export const Crops: React.FC<CropsProps> = ({}) => {
    const { setTitle } = useHeader()

    useEffect(() => {
        setTitle("Safras")
    }, [])

    return (
        <Box
            sx={{
                flexDirection: "column",
                padding: "5vw",
                paddingBottom: 0,
                gap: "5vw",
                width: "100vw",
                overflowX: "hidden",
                justifyContent: "space-between",
            }}
        >
            <CategoriesList />
            <Banners />
            <NearYouList />
            <CropsList />
        </Box>
    )
}
