import React from "react"
import { Box } from "@mui/material"
import { ListTitle } from "../../components/ListTitle"
import { useCrops } from "../../hooks/useCrops"
import { CropCard } from "../../components/CropCard"

interface CropsListProps {}

export const CropsList: React.FC<CropsListProps> = ({}) => {
    const { crops } = useCrops()

    return (
        <Box sx={{ flexDirection: "column", gap: "5vw" }}>
            <ListTitle title="Safras" nextLocation="/" />
            <Box sx={{ flexDirection: "column", gap: "2vw", overflowY: "auto", height: "60vw" }}>
                {crops.map((crop) => (
                    <CropCard key={crop.id} crop={crop} />
                ))}
                {crops.map((crop) => (
                    <CropCard key={crop.id} crop={crop} />
                ))}
                {crops.map((crop) => (
                    <CropCard key={crop.id} crop={crop} />
                ))}
                {crops.map((crop) => (
                    <CropCard key={crop.id} crop={crop} />
                ))}
                {crops.map((crop) => (
                    <CropCard key={crop.id} crop={crop} />
                ))}
            </Box>
        </Box>
    )
}
