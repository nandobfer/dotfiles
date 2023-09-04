import React from "react"
import { Avatar, Box } from "@mui/material"

interface ReviewCardProps {
    subaccount: Subaccount
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ subaccount: business }) => {
    return (
        <Box sx={{ alignItems: "center", background: "white", padding: "2vw 3vw", borderRadius: "5vw", gap: "3vw" }}>
            <Avatar src={business.image} sx={{ width: "15vw", height: "15vw" }} />
            <Box sx={{ flexDirection: "column" }}>
                <p style={{ fontSize: "4vw" }}>{business.name}</p>
                <p>Análise para </p>
            </Box>
        </Box>
    )
}