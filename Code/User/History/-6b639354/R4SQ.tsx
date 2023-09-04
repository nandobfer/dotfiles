import React from "react"
import { Box } from "@mui/material"
import { useCategories } from "../../hooks/useCategories"
import { Category } from "../../components/Category"

interface CategoriesListProps {}

export const CategoriesList: React.FC<CategoriesListProps> = ({}) => {
    const { categories, loading } = useCategories()

    return (
        <Box sx={{ gap: "2vw", width: "100vw", overflowX: "auto", paddingRight: "10vw" }}>
            {categories.map((category) => (
                <Category key={category.id} category={category} />
            ))}
        </Box>
    )
}
