import React from "react"
import { Box } from "@mui/material"
import { Info } from "./Info"
import StarSharpIcon from "@mui/icons-material/StarSharp"
import { useDate } from "../hooks/useDate"

interface UserStatsProps {
    user: User
}

export const UserStats: React.FC<UserStatsProps> = ({ user }) => {
    const { getDifference } = useDate()

    return (
        <Box
            sx={{
                border: `1px solid gray`,
                borderRadius: "2vw",
                margin: "0 4vw",
                padding: "4vw",
                justifyContent: "space-between",
            }}
        >
            <Info title="Vendas" name={user.sold} />
            <Info title="Compras" name={user.bought} />
            <Info title="Nota" name={user.rating ? user?.rating : ""} icon={<StarSharpIcon sx={{ width: "3.2vw" }} />} />
            <Info title="Meses" name={getDifference(new Date(user.date || 0))} />
        </Box>
    )
}
