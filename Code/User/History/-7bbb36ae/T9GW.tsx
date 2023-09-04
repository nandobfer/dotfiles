import React from "react"
import { Box, Paper } from "@mui/material"

interface CategoryProps {
    category: Category
}

export const Category: React.FC<CategoryProps> = ({ category }) => {
    return (
        <Paper variant="outlined" sx={{ borderRadius: "50vw", flexShrink: 0, padding: "2vw 5vw" }}>
            {category.name}
        </Paper>
    )
}
