import React from "react"
import { Box } from "@mui/material"
import { useLocation } from "react-router-dom"

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
    const location = useLocation()
    const list: Crop[] = location.state.list
    const placeholder: string = location.state.placeholder

    return <Box sx={{}}>pesquisa</Box>
}
