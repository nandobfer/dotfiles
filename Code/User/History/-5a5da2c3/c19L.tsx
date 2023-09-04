import React from "react"
import { Box, Paper } from "@mui/material"
import { useCustomers } from "../../../hooks/useCustomers"
import { Tag } from "../../../components/Tag"

interface ServicesProps {}

export const Services: React.FC<ServicesProps> = ({}) => {
    const { services } = useCustomers()

    return (
        <Paper sx={{ gap: "1vw", bgcolor: "background.default", flexDirection: "column" }}>
            <p>Serviços</p>
            <Box sx={{ gap: "1vw" }}>
                {services.map((service) => (
                    <Tag key={service.id} name={service.tag} />
                ))}
            </Box>
        </Paper>
    )
}
