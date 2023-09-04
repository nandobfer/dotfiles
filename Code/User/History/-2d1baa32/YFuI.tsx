import React from "react"
import { Box } from "@mui/material"
import { useStopwatch } from "react-timer-hook"

interface StopwatchProps {}

export const Stopwatch: React.FC<StopwatchProps> = ({}) => {
    const { totalSeconds, seconds, minutes, hours, days, isRunning, start, pause, reset } = useStopwatch({ autoStart: true })

    return <Box sx={{}}></Box>
}
