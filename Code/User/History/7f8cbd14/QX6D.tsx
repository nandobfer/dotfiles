import React from "react"
import { Avatar, Box, Paper } from "@mui/material"
import { CurrencyText } from "./CurrencyText"

interface CropCardProps {
    crop: Crop
    variant?: "default" | "square"
}

export const CropCard: React.FC<CropCardProps> = ({ crop, variant = "default" }) => {
    return variant == "default" ? (
        <Paper elevation={0} sx={{ alignItems: "center", background: "white", padding: "2vw 3vw", borderRadius: "5vw", gap: "3vw" }}>
            <Avatar src={crop.image} sx={{ width: "15vw", height: "15vw" }} />
            <Box sx={{ flexDirection: "column", width: "65vw", gap: "1vw" }}>
                <Box sx={{ justifyContent: "space-between", alignItems: "center" }}>
                    <Box sx={{ flexDirection: "column" }}>
                        <p style={{ fontSize: "4vw" }}>{crop.name}</p>
                        <p style={{ fontSize: "3vw" }}>{crop.weight} toneladas</p>
                    </Box>
                    <CurrencyText value={crop.price} style={{ fontSize: "4vw" }} />
                </Box>

                <Box sx={{ fontSize: "2.6vw", justifyContent: "space-between" }}>
                    <p>Produtor: {crop.producer.rating}</p>
                    <p>Vendas: {crop.producer.sold}</p>
                    <p>Compras: {crop.producer.bought}</p>
                    <p>{new Date(crop.producer.date).getMonth() + 1} meses</p>
                </Box>
            </Box>
        </Paper>
    ) : (
        <Paper elevation={0} sx={{ flexDirection: "column", background: "transparent", gap: "1vw" }}>
            <Avatar src={crop.image} variant="rounded" sx={{ width: "20vw", height: "20vw" }} />
            <p style={{ fontSize: "3.2vw", fontWeight: "bold" }}>{crop.name}</p>
            <CurrencyText value={crop.price} style={{ fontSize: "2.8vw" }} />
        </Paper>
    )
}
