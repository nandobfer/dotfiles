import React from "react"
import { Box } from "@mui/material"
import { ListTitle } from "../../components/ListTitle"
import { useCrops } from "../../hooks/useCrops"
import { CropCard } from "../../components/CropCard"

interface NearYouListProps {}

export const NearYouList: React.FC<NearYouListProps> = ({}) => {
    const { crops } = useCrops()

    return (
        <Box sx={{ flexDirection: "column" }}>
            <ListTitle title="Perto de você" nextLocation="/" />
            <Box sx={{ width: "100vw", overflowX: "auto", paddingRight: "10vw", gap: "5vw", alignItems: "center" }}>
                {crops.map((crop) => (
                    <CropCard key={crop.id} crop={crop} />
                ))}
            </Box>
        </Box>
    )
}
