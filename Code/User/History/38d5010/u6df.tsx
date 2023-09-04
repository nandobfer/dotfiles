import React from "react"
import { Box } from "@mui/material"
import { useBusinesses } from "../../hooks/useBusinesses"
import { ListTitle } from "../../components/ListTitle"

interface BusinessListProps {}

export const BusinessList: React.FC<BusinessListProps> = ({}) => {
    const cropList = useBusinesses().businesses
    const crops = cropList.sort((a, b) => b.id - a.id).slice(0, 5)

    return (
        <Box sx={{ flexDirection: "column", gap: "2vw" }}>
            <ListTitle title="Promoções" location="business" />
            {crops.map((crop) => (
                <
            ))}
        </Box>
    )
}
