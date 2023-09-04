import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../../components/SearchInput"
import { useHeader } from "../../hooks/useHeader"

interface ReviewsProps {}

export const Reviews: React.FC<ReviewsProps> = ({}) => {
    const header = useHeader()

    const handleSearch = () => null

    useEffect(() => {
        header.setTitle("Análises")
    }, [])

    return (
        <Box sx={{ flexDirection: "column", padding: "10vh 5vw" }}>
            <SearchInput placeholder="análises" onChange={handleSearch} />
        </Box>
    )
}
