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
        <Box sx={{ flexDirection: "column", width: "100%", padding: "0 7vw" }}>
            <SearchInput placeholder={"safras"} />
            {list.map((item) => (
                <CropCard key={item.id} crop={crop} />
            ))}
        </Box>
    )
}
