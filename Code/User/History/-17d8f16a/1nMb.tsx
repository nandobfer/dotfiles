import React from "react"
import { Box, Paper } from "@mui/material"

interface StatusLogsProps {
    logs: StatusLog[]
}

export const StatusLogs: React.FC<StatusLogsProps> = ({ logs }) => {
    return (
        <Paper sx={{ flexDirection: "column", padding: "1vw", fontWeight: "bold", fontSize: "1vw", gap: "1vw" }}>
            Atividade
            {logs.map((log) => (
                <Box key={log.id} sx={{ width: "30vw", fontSize: "0.7vw", gap: "0.5vw" }}>
                    <Box sx={{ width: "10vw" }}>{new Date(log.datetime).toLocaleString("pt-br")}</Box>
                </Box>
            ))}
        </Paper>
    )
}
