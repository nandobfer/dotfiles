import React from "react"
import { Box } from "@mui/material"

interface PanelProps {}

export const Panel: React.FC<PanelProps> = ({}) => {
    return <Box sx={{ flexDirection: "column", width: "100%", overflowY: "auto" }}></Box>
}
