import React from "react"
import { Box } from "@mui/material"

interface StopwatchProps {}

export const Stopwatch = () => (
    <ReactStopwatch
        seconds={0}
        minutes={0}
        hours={0}
        limit="00:00:10"
        onChange={({ hours, minutes, seconds }) => {
            // do something
        }}
        onCallback={() => console.log("Finish")}
        render={({ formatted, hours, minutes, seconds }) => {
            return (
                <div>
                    <p>Formatted: {formatted}</p>
                    <p>Hours: {hours}</p>
                    <p>Minutes: {minutes}</p>
                    <p>Seconds: {seconds}</p>
                </div>
            )
        }}
    />
)
