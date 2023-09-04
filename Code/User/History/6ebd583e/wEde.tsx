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

    return <Box sx={{ backgroundColor: colors[variant], borderRadius: "5vw", width: "30vw", height: "30vw" }}></Box>
}
