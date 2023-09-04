import React from "react"
import { Box } from "@mui/material"
import { useUsers } from "../../hooks/useUsers"

interface ReviewBoxProps {
    variant: "producer" | "agent" | "shipping" | "business"
}

export const ReviewBox: React.FC<ReviewBoxProps> = ({ variant }) => {
    const { users } = useUsers()

    const total = users.filter((user) => user[variant]).length

    const colors = {
        producer: "#D2FFB6",
        agent: "#E2EAFF",
        shipping: "#FFFDC7",
        business: "#F0C7FF",
    }

    const title = {
        producer: "Produtores",
        agent: "Corretores",
        shipping: "Transportadores",
        business: "Lojas",
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
                <p style={{ fontSize: "6vw" }}>{total}</p>
                <p style={{ fontWeight: "bold" }}>{title[variant]}</p>
            </Box>
            <p style={{ fontSize: "3.5vw" }}>
                <span style={{ fontWeight: "bold" }}>{213}</span> {title[variant]} aguardando análise {">"}
            </p>
        </Box>
    )
}
