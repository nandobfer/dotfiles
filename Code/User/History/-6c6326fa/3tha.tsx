import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { SearchInput } from "../../components/SearchInput"
import { useHeader } from "../../hooks/useHeader"
import { useBusinesses } from "../../hooks/useBusinesses"
import { ReviewCard } from "./ReviewCard"

interface ReviewsProps {}

export const Reviews: React.FC<ReviewsProps> = ({}) => {
    const header = useHeader()
    const { businesses } = useBusinesses()

    // adicionar as outras subaccounts e ordenar por data?
    const pending = [...businesses.filter((business) => !business.active).map((item) => ({ ...item, type: "Loja & Serviços" }))]

    const [list, setList] = useState(pending)

    const handleSearch = (value: string) => {
        setList(pending.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())))
    }

    useEffect(() => {
        header.setTitle("Análises")
    }, [])

    return (
        <Box sx={{ flexDirection: "column", padding: "10vh 5vw", gap: "5vw", width: "100%" }}>
            <SearchInput placeholder="análises" onChange={handleSearch} />

            <Box sx={{ flexDirection: "column", gap: "3vw", width: "100%" }}>
                {list.map((business) => (
                    <ReviewCard key={business.id} subaccount={business} />
                ))}
            </Box>
        </Box>
    )
}
