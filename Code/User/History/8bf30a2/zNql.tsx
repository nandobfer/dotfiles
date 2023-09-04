import React, { useState } from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../../components/SearchInput"
import { useCrops } from "../../hooks/useCrops"
import { CropCard } from "../../components/CropCard"

interface CropsProps {}

export const Crops: React.FC<CropsProps> = ({}) => {
    const crops = useCrops()

    const [list, setList] = useState(crops.crops)

    return (
        <Box sx={{ flexDirection: "column", width: "100%", padding: "0 7vw", gap: "5vw" }}>
            <SearchInput placeholder={"safras"} />
            <Box sx={{ flexDirection: "column", gap: "3vw" }}>
                {list.map((crop) => (
                    <CropCard key={crop.id} crop={crop} />
                ))}
            </Box>
        </Box>
    )
}