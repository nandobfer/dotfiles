import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { useApi } from "../../../hooks/useApi"

interface LogsProps {}

export const Logs: React.FC<LogsProps> = ({}) => {
    const api = useApi()

    const [logs, setLogs] = useState<Log[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {}, [])

    return <Box sx={{}}></Box>
}
