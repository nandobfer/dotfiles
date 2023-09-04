import React from "react"
import { Box } from "@mui/material"

interface BusinessListProps {}

export const BusinessList: React.FC<BusinessListProps> = ({}) => {
    const cropList = useCrops().crops
    const crops = cropList.sort((a, b) => b.sold - a.sold).slice(0, 5)

    return (
        <Box sx={{ flexDirection: "column", gap: "2vw" }}>
            <ListTitle title="Safras" location="crops" />
            {crops.map((crop) => (
                <CropCard key={crop.id} crop={crop} />
            ))}
        </Box>
    )
}
