import React from "react"
import { Box } from "@mui/material"

interface LogContainerProps {
    log: Log
}

export const LogContainer: React.FC<LogContainerProps> = ({ log }) => {
    return (
        <Box sx={{}}>
            <p>{new Date(log.date).toLocaleString("pt-br")}</p>
        </Box>
    )
}
