import React from "react"
import { Box } from "@mui/material"
import { Route, Routes, useLocation } from "react-router-dom"
import { Header } from "../../components/Header"
import { Crops } from "./Crops"

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
    return (
        <Box sx={{ flexDirection: "column", width: "100%", padding: "10vh 0" }}>
            <Header />
            <Routes>
                <Route path="crops" element={<Crops />} />
            </Routes>
        </Box>
    )
}
