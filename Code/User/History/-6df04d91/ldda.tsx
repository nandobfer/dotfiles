import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { useHeader } from "../../hooks/useHeader"
import { SearchInput } from "../../components/SearchInput"

interface PanelProps {}

export const Panel: React.FC<PanelProps> = ({}) => {
    const header = useHeader()

    const handleSearch = () => null

    useEffect(() => {
        header.setTitle("Administrador")
    }, [])
    return (
        <Box sx={{ flexDirection: "column", width: "100%", overflowY: "auto" }}>
            <SearchInput placeholder="teste" onChange={handleSearch} />
        </Box>
    )
}
