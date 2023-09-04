import React from "react"
import { Box, TextField } from "@mui/material"
import { textFieldStyle } from "../style/textfield"

interface TaiTextFieldProps {}

export const TaiTextField: React.FC<TaiTextFieldProps> = ({}) => {
    return <TextField sx={textFieldStyle} />
}
