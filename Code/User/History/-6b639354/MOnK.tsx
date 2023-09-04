import React from 'react'
import {Box} from '@mui/material'
import { useCategories } from '../../hooks/useCategories'

interface CategoriesListProps {
    
}

export const CategoriesList: React.FC<CategoriesListProps> = ({ }) => {
    const {categories, loading} = useCategories()
    
    return (
        <Box sx={{}}>
            {categories.map(category => )}
        </Box>
    )
}