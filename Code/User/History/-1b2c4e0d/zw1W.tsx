import React from "react"
import { Avatar, Box } from "@mui/material"
import { useDate } from "../../hooks/useDate"

interface ReviewCardProps {
    subaccount: Subaccount
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ subaccount }) => {
    const { getHours } = useDate()

    return (
        <Box sx={{ alignItems: "center", background: "white", padding: "2vw 3vw", borderRadius: "5vw", gap: "3vw" }}>
            <Avatar src={subaccount.image} sx={{ width: "15vw", height: "15vw" }} />
            <Box sx={{ flexDirection: "column" }}>
                <p style={{ fontSize: "4vw" }}>{subaccount.name}</p>
                <p>Análise para {subaccount.type}</p>
                <p>{getHours(new Date(subaccount.date))} h atrás</p>
            </Box>
        </Box>
    )
}
