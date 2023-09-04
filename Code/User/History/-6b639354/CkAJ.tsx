import React from "react"
import { Box } from "@mui/material"
import { useCategories } from "../../hooks/useCategories"
import { Category } from "../../components/Category"

interface CategoriesListProps {}

export const CategoriesList: React.FC<CategoriesListProps> = ({}) => {
    const { categories, loading } = useCategories()

    return (
        <Box sx={{ width: "100vw", overflowX: "hidden" }}>
            <Box sx={{ gap: "5vw", width: "100vw", overflowX: "auto" }}>
                {categories.map((category) => (
                    <Category key={category.id} category={category} />
                ))}
            </Box>
        </Box>
    )
}
