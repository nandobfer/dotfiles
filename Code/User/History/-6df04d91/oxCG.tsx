import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { useHeader } from "../../hooks/useHeader"
import { SearchInput } from "../../components/SearchInput"
import { ReviewBox } from "./ReviewBox"
import { ListTitle } from "../../components/ListTitle"

interface PanelProps {}

export const Panel: React.FC<PanelProps> = ({}) => {
    const header = useHeader()

    const handleSearch = () => null

    useEffect(() => {
        header.setTitle("Administrador")
    }, [])
    return (
        <Box sx={{ flexDirection: "column", width: "100%", overflowY: "auto", padding: "10vh 5vw", gap: "5vw", overflowX: "hidden" }}>
            <SearchInput placeholder="teste" onChange={handleSearch} />
            <Box sx={{ gap: "3vw", width: "100vw", overflowX: "auto", paddingRight: "10vw" }}>
                <ReviewBox variant="producer" />
                <ReviewBox variant="agent" />
                <ReviewBox variant="business" />
                <ReviewBox variant="shipping" />
            </Box>

            <ListTitle location="" title="Transações Recentes" />

            <ListTitle location="" title="Estatísticas" />
        </Box>
    )
}
