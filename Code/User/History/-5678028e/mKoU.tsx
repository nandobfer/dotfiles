import React from "react"
import { Box, TextField } from "@mui/material"

interface LogContainerProps {
    log: Log
}

export const LogContainer: React.FC<LogContainerProps> = ({ log }) => {
    return <TextField label={`${new Date(log.date).toLocaleString("pt-br")} - ${log.user.username}`} value={log.text} fullWidth />
}
