import React from "react"
import { Paper } from "@mui/material"

interface CategoryProps {
    category: Category
}

export const Category: React.FC<CategoryProps> = ({ category }) => {
    return (
        <Paper variant="outlined" sx={{ borderRadius: "50vw", flexShrink: 0, padding: "1vw 2vw", borderColor: "primary.main", fontSize: "3.5vw" }}>
            {category.name}
        </Paper>
    )
}
