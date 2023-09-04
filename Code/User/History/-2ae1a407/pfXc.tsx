import React from "react"
import { Box } from "@mui/material"
import { ListTitle } from "../../components/ListTitle"
import { useCrops } from "../../hooks/useCrops"

interface NearYouListProps {}

export const NearYouList: React.FC<NearYouListProps> = ({}) => {
    const { crops } = useCrops()

    return (
        <Box sx={{ flexDirection: "column" }}>
            <ListTitle title="Perto de você" nextLocation="/" />
        </Box>
    )
}
