import React from "react"
import { Box } from "@mui/material"
import { useCategories } from "../../hooks/useCategories"
import { Category } from "../../components/Category"

interface CategoriesListProps {}

export const CategoriesList: React.FC<CategoriesListProps> = ({}) => {
    const { categories, loading } = useCategories()

    return (
        <Box sx={{ gap: "5vw" }}>
            {categories.map((category) => (
                <Category key={category.id} category={category} />
            ))}
        </Box>
    )
}
