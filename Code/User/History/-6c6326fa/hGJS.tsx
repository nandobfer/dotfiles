import React from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../../components/SearchInput"

interface ReviewsProps {}

export const Reviews: React.FC<ReviewsProps> = ({}) => {
    const handleSearch = () => null

    return (
        <Box sx={{ flexDirection: "column", padding: "10vh 5vw" }}>
            <SearchInput placeholder="análises" onChange={handleSearch} />
        </Box>
    )
}
