import React, { useState } from 'react'
import {Box, TextField} from '@mui/material'

interface SearchInputProps {
    placeholder: string
}

export const SearchInput:React.FC<SearchInputProps> = ({ placeholder }) => {
    const [value, setValue] = useState('')
    
    const handleChange = (value: string) => {
        setValue(value)
    }
    
    return (
        <TextField value={value} onChange={event => handleChange(event.target.value)} InputProps={{startAdornment: }} />
    )
}