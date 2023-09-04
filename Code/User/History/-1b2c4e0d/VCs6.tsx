import React from "react"
import { Avatar, Box } from "@mui/material"
import { useDate } from "../../hooks/useDate"

interface ReviewCardProps {
    subaccount: Subaccount
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ subaccount }) => {
    const { getHours } = useDate()

    return (
        <Box sx={{ alignItems: "center", background: "white", padding: "2vw 3vw", borderRadius: "5vw", gap: "3vw", width: "100vw" }}>
            <Avatar src={subaccount.image} sx={{ width: "15vw", height: "15vw" }} />
            <Box sx={{ flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
                <p style={{ fontSize: "4vw", fontWeight: "bold" }}>{subaccount.name}</p>
                <p style={{ fontSize: "3vw", fontWeight: "bold" }}>Análise para {subaccount.type}</p>
                <p style={{ fontSize: "3vw" }}>{getHours(new Date(subaccount.date))} h atrás</p>
            </Box>
            <p style={{ fontSize: "2.5vw" }}>Ver Documentação</p>
        </Box>
    )
}
