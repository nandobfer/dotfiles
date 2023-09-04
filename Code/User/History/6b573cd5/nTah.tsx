import React from "react"
import { Box } from "@mui/material"
import { useCrops } from "../../hooks/useCrops"
import { CropCard } from "../../components/CropCard"

interface SafrasProps {}

export const Safras: React.FC<SafrasProps> = ({}) => {
    const crops = useCrops()

    return (
        <Box sx={{ flexDirection: "column", padding: "5vw" }}>
            {crops.crops.map((crop) => (
                <CropCard key={crop.id} crop={crop} />
            ))}
        </Box>
    )
}
