import React, { useState } from "react"
import { Box, Button, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

interface SearchInputProps {
    placeholder: string
}

export const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {
    const [value, setValue] = useState("")

    const handleChange = (value: string) => {
        setValue(value)
    }

    return (
        <TextField
            value={value}
            onChange={(event) => handleChange(event.target.value)}
            placeholder={`Buscar por ${placeholder}`}
            InputProps={{
                startAdornment: <SearchIcon />,
                endAdornment: (
                    <Button variant="contained" color="secondary" sx={{ borderRadius: "10vw" }}>
                        Filtrar
                    </Button>
                ),
                sx: { gap: "2vw", borderRadius: "10vw" },
            }}
        />
    )
}
