import React from "react"
import { Box } from "@mui/material"
import { useBusinesses } from "../../hooks/useBusinesses"
import { ListTitle } from "../../components/ListTitle"
import { ResourceCard } from "../../components/ResourceCard"

interface BusinessListProps {}

export const BusinessList: React.FC<BusinessListProps> = ({}) => {
    const businessList = useBusinesses().businesses
    const businesses = businessList.sort((a, b) => b.id - a.id).slice(0, 5)

    return (
        <Box sx={{ flexDirection: "column", gap: "2vw" }}>
            <ListTitle title="Lojas" location="business" />
            {businesses
                .filter((resource) => resource.active)
                .map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} type={[resource.store && "store", resource.service && "service"]} />
                ))}
        </Box>
    )
}
