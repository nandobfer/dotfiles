import React from "react"
import { Box, SxProps } from "@mui/material"
import { Info } from "./Info"
import StarSharpIcon from "@mui/icons-material/StarSharp"
import { useDate } from "../hooks/useDate"

interface UserStatsProps {
    user: User
    sx?: SxProps
}

export const UserStats: React.FC<UserStatsProps> = ({ user, sx }) => {
    const { getDifference } = useDate()

    const _sx: SxProps = {
        borderRadius: "2vw",
        margin: "0 4vw",
        justifyContent: "space-between",
        ...sx,
    }
    return (
        <Box sx={_sx}>
            <Info title="Vendas" name={user.sold} />
            <Info title="Compras" name={user.bought} />
            <Info title="Nota" name={user.rating ? user?.rating : ""} icon={<StarSharpIcon sx={{ width: "3.2vw" }} />} />
            <Info title="Meses" name={getDifference(new Date(user.date || 0))} />
        </Box>
    )
}
