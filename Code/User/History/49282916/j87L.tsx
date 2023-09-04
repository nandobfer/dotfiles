import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { useCrops } from "../../hooks/useCrops"
import { CropCard } from "../../components/CropCard"
import { useHeader } from "../../hooks/useHeader"
import { CategoriesList } from "./CategoriesList"
import { Banners } from "./Banners"
import { NearYouList } from "./NearYouList"

interface CropsProps {}

export const Crops: React.FC<CropsProps> = ({}) => {
    const crops = useCrops()
    const { setTitle } = useHeader()

    useEffect(() => {
        setTitle("Safras")
    }, [])

    return (
        <Box sx={{ flexDirection: "column", padding: "5vw", gap: "5vw", width: "100vw", overflowX: "hidden" }}>
            <CategoriesList />
            <Banners />
            <NearYouList />

            <Box sx={{ flexDirection: "column" }}>
                {crops.crops.map((crop) => (
                    <CropCard key={crop.id} crop={crop} />
                ))}
                {crops.crops.map((crop) => (
                    <CropCard key={crop.id} crop={crop} />
                ))}
            </Box>
        </Box>
    )
}
