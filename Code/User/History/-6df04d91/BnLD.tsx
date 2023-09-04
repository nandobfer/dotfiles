import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { useHeader } from "../../hooks/useHeader"

interface PanelProps {}

export const Panel: React.FC<PanelProps> = ({}) => {
    const header = useHeader()

    useEffect(() => {
        header.setTitle("Administrador")
    }, [])
    return <Box sx={{ flexDirection: "column", width: "100%", overflowY: "auto" }}></Box>
}
