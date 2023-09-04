import React from "react"
import { Box } from "@mui/material"
import { useCustomers } from "../../../hooks/useCustomers"

interface ServicesProps {}

export const Services: React.FC<ServicesProps> = ({}) => {
    const { services } = useCustomers()

    return (
        <Box sx={{ gap: "1vw" }}>
            {services.map((service) => (
                <Box key={service.id}>{service.name}</Box>
            ))}
        </Box>
    )
}
