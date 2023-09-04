import React, { useState } from "react"
import { Box } from "@mui/material"

interface LogsProps {}

export const Logs: React.FC<LogsProps> = ({}) => {
    const [logs, setLogs] = useState<Log[]>([])
    const [loading, setLoading] = useState(false)

    return <Box sx={{}}></Box>
}
