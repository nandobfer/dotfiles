import React, { useState } from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../../components/SearchInput"
import { useCrops } from "../../hooks/useCrops"
import { CropCard } from "../../components/CropCard"

interface CropsProps {}

export const Crops: React.FC<CropsProps> = ({}) => {
    const crops = useCrops()

    const [list, setList] = useState(crops.crops)

    const handleChange = (value: string) => {
        const result = crops.crops.filter((crop) => crop.name.toLowerCase().includes(value.toLowerCase()))
        setList(result)
    }

    return (
        <Box sx={{ flexDirection: "column", width: "100%", padding: "0 5vw", gap: "5vw", height: "100%", overflow: "hidden" }}>
            <SearchInput placeholder={"safras"} onChange={handleChange} />
            <Box sx={{ flexDirection: "column", gap: "2vw", height: "100%", overflowY: "auto", paddingBottom: "10vh" }}>
                {list.map((crop) => (
                    <CropCard key={crop.id} crop={crop} />
                ))}
            </Box>
        </Box>
    )
}
