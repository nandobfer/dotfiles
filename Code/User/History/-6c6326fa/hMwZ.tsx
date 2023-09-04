import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../../components/SearchInput"
import { useHeader } from "../../hooks/useHeader"
import { useBusinesses } from "../../hooks/useBusinesses"
import { ReviewCard } from "./ReviewCard"

interface ReviewsProps {}

export const Reviews: React.FC<ReviewsProps> = ({}) => {
    const header = useHeader()
    const { businesses } = useBusinesses()
    const pending = businesses.filter((business) => !business.active)

    const handleSearch = () => null

    useEffect(() => {
        header.setTitle("Análises")
    }, [])

    return (
        <Box sx={{ flexDirection: "column", padding: "10vh 5vw", gap: "5vw" }}>
            <SearchInput placeholder="análises" onChange={handleSearch} />

            <Box sx={{ flexDirection: "column", gap: "3vw" }}>
                {pending.map((business) => (
                    <ReviewCard key={business.id} subaccount={business} />
                ))}
            </Box>
        </Box>
    )
}
