import React from "react"
import { Box } from "@mui/material"
import { CategoriesList } from "./CategoriesList"
import { Banners } from "./Banners"
import { NearYouList } from "./NearYouList"
import { CropsList } from "./CropsList"

interface BusinessProps {}

export const Business: React.FC<BusinessProps> = ({}) => {
    return (
        <Box
            sx={{
                flexDirection: "column",
                padding: "0 5vw",
                gap: "5vw",
                width: "100vw",
                height: "100%",
                overflowX: "hidden",
                justifyContent: "space-between",
            }}
        >
            <CategoriesList />
            <Banners />
            <NearYouList />
            <CropsList />
        </Box>
    )
}
