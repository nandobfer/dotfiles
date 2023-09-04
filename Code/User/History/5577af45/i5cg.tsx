import React from "react"
import { Box } from "@mui/material"
import { ListTitle } from "../../components/ListTitle"

interface CropsListProps {}

export const CropsList: React.FC<CropsListProps> = ({}) => {
    return (
        <Box sx={{}}>
            <ListTitle title="Safras" nextLocation="/" />
            <Box sx={{ flexDirection: "column" }}>
                {crops.crops.map((crop) => (
                    <CropCard key={crop.id} crop={crop} />
                ))}
            </Box>
        </Box>
    )
}
