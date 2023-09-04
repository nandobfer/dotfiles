import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { useCrops } from "../../hooks/useCrops"
import { CropCard } from "../../components/CropCard"
import { useHeader } from "../../hooks/useHeader"

interface CropsProps {}

export const Crops: React.FC<CropsProps> = ({}) => {
    const crops = useCrops()
    const { setTitle } = useHeader()

    useEffect(() => {
        setTitle("Safras")
    }, [])

    return (
        <Box sx={{ flexDirection: "column", padding: "5vw" }}>
            {crops.crops.map((crop) => (
                <CropCard key={crop.id} crop={crop} />
            ))}
        </Box>
    )
}
