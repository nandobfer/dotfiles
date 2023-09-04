import React from "react"
import { Box } from "@mui/material"
import { useUsers } from "../../hooks/useUsers"

interface ReviewBoxProps {
    variant: "producer" | "agent" | "shipping" | "ads" | "adm"
}

export const ReviewBox: React.FC<ReviewBoxProps> = ({ variant }) => {
    const { users } = useUsers()

    const colors = {
        producer: "#D2FFB6",
        agent: "#E2EAFF",
        shipping: "#FFFDC7",
        ads: "#F0C7FF",
        adm: "#FC5F5C",
    }

    const title = {
        producer: "Produtor",
        agent: "Corretor",
        shipping: "Transportador",
        ads: "",
        adm: "Administrador",
    }

    return (
        <Box
            sx={{
                backgroundColor: colors[variant],
                borderRadius: "5vw",
                width: "35vw",
                height: "35vw",
                flexDirection: "column",
                padding: "3vw",
                justifyContent: "space-between",
            }}
        >
            <Box sx={{ flexDirection: "column" }}>
                <p style={{ fontSize: "6vw" }}>{2304}</p>
                <p>{variant}</p>
            </Box>
            <p style={{ fontSize: "3vw" }}>
                <span>{213}</span> {variant} aguardando análise {">"}
            </p>
        </Box>
    )
}
