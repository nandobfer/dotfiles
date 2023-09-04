import React, { useEffect, useState } from "react"
import { Box, SxProps } from "@mui/material"
import { useHeader } from "../../hooks/useHeader"
import { SearchInput } from "../../components/SearchInput"
import { ReviewBox } from "./ReviewBox"
import { ListTitle } from "../../components/ListTitle"
import { useUsers } from "../../hooks/useUsers"
import { useCrops } from "../../hooks/useCrops"

interface PanelProps {}

export const Panel: React.FC<PanelProps> = ({}) => {
    const header = useHeader()

    const { users } = useUsers()
    const { crops } = useCrops()

    const everything = [...users, ...crops]

    const [searching, setSearching] = useState("")
    const [list, setList] = useState(everything)

    const wrapperStyle: SxProps = { flexDirection: "column", width: "100%", overflowY: "auto", padding: "10vh 5vw", gap: "5vw", overflowX: "hidden" }

    const handleSearch = (value: string) => {
        setSearching(value)
        setList(everything.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())))
    }

    useEffect(() => {
        header.setTitle("Administrador")
    }, [])
    return searching ? (
        <Box sx={wrapperStyle}>
            <SearchInput placeholder="teste" onChange={handleSearch} />
            <Box sx={{ flexDirection: "column", gap: "3vw" }}>
                {list.map((item) => (
                    <></>
                ))}
            </Box>
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
