import React from "react"
import { Box } from "@mui/material"
import { useLocation } from "react-router-dom"
import { SearchInput } from "../components/SearchInput"
import { Header } from "../components/Header"

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
    const location = useLocation()
    const list: Crop[] = location.state.list
    const placeholder: string = location.state.placeholder

    return (
        <Box sx={{ flexDirection: "column", width: "100%", padding: "10vh 0" }}>
            <Header />
            <SearchInput placeholder={placeholder} />
        </Box>
    )
}
