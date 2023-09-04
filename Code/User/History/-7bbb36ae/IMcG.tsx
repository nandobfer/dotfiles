import React from "react"
import { Box } from "@mui/material"

interface CategoryProps {
    category: Category
}

export const Category: React.FC<CategoryProps> = ({ category }) => {
    return <Box sx={{ borderRadius: "50vw", flexShrink: 0, border: "0.4vw solid black", padding: "2vw 5vw" }}>{category.name}</Box>
}
