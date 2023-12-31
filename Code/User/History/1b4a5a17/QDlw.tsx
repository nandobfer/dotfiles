import React from "react"
import { CircularProgress, SxProps, TextField } from "@mui/material"

interface SearchFieldProps {
    value: string
    onChange: (e: string | React.ChangeEvent<any>) => void
    loading?: boolean
    sx?: SxProps
    fullWidth?: boolean
}

export const SearchField: React.FC<SearchFieldProps> = ({ onChange, value, loading, sx, fullWidth }) => {
    return (
        <TextField
            name="search"
            className="search"
            placeholder="Buscar"
            InputProps={{
                sx: { backgroundColor: "white" },
                endAdornment: loading ? <CircularProgress size={"1.5rem"} /> : <></>,
            }}
            onChange={onChange}
            value={value}
            sx={sx}
            fullWidth={fullWidth}
        />
    )
}
