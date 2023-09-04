import React from "react"
import { Button } from "@mui/material"

interface CategoryProps {
    category: Category
}

export const Category: React.FC<CategoryProps> = ({ category }) => {
    return (
        <Button variant="outlined" sx={{ borderRadius: "50vw" }}>
            {category.name}
        </Button>
    )
}
