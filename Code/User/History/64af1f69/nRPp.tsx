import React from "react"
import { Box, Paper } from "@mui/material"

interface VerificationProps {}

export const Verification: React.FC<VerificationProps> = ({}) => {
    return (
        <Box sx={{ padding: "10vw", width: "100%" }}>
            <Paper sx={{ flexDirection: "column", width: "100%", justifyContent: "space-evenly" }}></Paper>
        </Box>
    )
}
