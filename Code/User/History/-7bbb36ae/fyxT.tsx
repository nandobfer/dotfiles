import React from "react"
import { Box } from "@mui/material"

interface CategoryProps {
    category: Category
}

export const Category: React.FC<CategoryProps> = ({ category }) => {
    return (
        <Box variant="outlined" sx={{ borderRadius: "50vw", flexShrink: 0 }}>
            {category.name}
        </Box>
    )
}
