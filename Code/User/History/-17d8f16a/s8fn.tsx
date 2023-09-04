import React from "react"
import { Box, Paper } from "@mui/material"

interface StatusLogsProps {
    logs: StatusLog[]
}

export const StatusLogs: React.FC<StatusLogsProps> = ({ logs }) => {
    return <Paper sx={{ flexDirection: "column", padding: "1vw", fontWeight: "bold", fontSize: "1vw" }}>Atividade</Paper>
}
