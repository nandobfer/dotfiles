import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { useHeader } from "../../hooks/useHeader"
import { SearchInput } from "../../components/SearchInput"
import { ReviewBox } from "./ReviewBox"

interface PanelProps {}

export const Panel: React.FC<PanelProps> = ({}) => {
    const header = useHeader()

    const handleSearch = () => null

    useEffect(() => {
        header.setTitle("Administrador")
    }, [])
    return (
        <Box sx={{ flexDirection: "column", width: "100%", overflowY: "auto", padding: "10vh 5vw", gap: "5vw" }}>
            <SearchInput placeholder="teste" onChange={handleSearch} />
            <Box sx={{ gap: "5vw", width: "100vw", overflowX: "auto" }}>
                <ReviewBox variant="producer" />
                <ReviewBox variant="agent" />
                <ReviewBox variant="business" />
                <ReviewBox variant="shipping" />
            </Box>
        </Box>
    )
}
