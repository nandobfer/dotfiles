import React, { useEffect, useState } from "react"
import { Box, SxProps } from "@mui/material"
import { useHeader } from "../../hooks/useHeader"
import { SearchInput } from "../../components/SearchInput"
import { ReviewBox } from "./ReviewBox"
import { ListTitle } from "../../components/ListTitle"

interface PanelProps {}

export const Panel: React.FC<PanelProps> = ({}) => {
    const header = useHeader()

    const [searching, setSearching] = useState("")

    const wrapperStyle: SxProps = { flexDirection: "column", width: "100%", overflowY: "auto", padding: "10vh 5vw", gap: "5vw", overflowX: "hidden" }

    const handleSearch = (value: string) => {
        setSearching(value)
    }

    useEffect(() => {
        header.setTitle("Administrador")
    }, [])
    return searching ? (
        <Box sx={wrapperStyle}>
            <SearchInput placeholder="teste" onChange={handleSearch} />
        </Box>
    ) : (
        <Box sx={wrapperStyle}>
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
