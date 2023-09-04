import React from "react"
import { Box } from "@mui/material"
import { ListTitle } from "../../components/ListTitle"
import { useCrops } from "../../hooks/useCrops"
import { CropCard } from "../../components/CropCard"

interface NearYouListProps {}

export const NearYouList: React.FC<NearYouListProps> = ({}) => {
    const cropList = useCrops().crops
    const crops = cropList.sort((a, b) => a.price - b.price).slice(0, 5)

    return (
        <Box sx={{ flexDirection: "column", gap: "5vw" }}>
            <ListTitle title="Safras" location="crops" />
            <Box sx={{ width: "100vw", overflowX: "auto", paddingRight: "10vw", gap: "3vw" }}>
                {crops.map((crop) => (
                    <CropCard key={crop.id} crop={crop} variant="square" />
                ))}
            </Box>
        </Box>
    )
}
