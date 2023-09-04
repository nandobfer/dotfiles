import React from "react"
import { Box, TextField } from "@mui/material"

interface LogContainerProps {
    log: Log
}

export const LogContainer: React.FC<LogContainerProps> = ({ log }) => {
    return (
        <Box sx={{}}>
            <TextField label={new Date(log.date).toLocaleString("pt-br")} />
        </Box>
    )
}
