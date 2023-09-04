import React from "react"
import { Box, TextField } from "@mui/material"
import { textFieldStyle } from "../style/textfield"

interface TaiTextFieldProps {}

export const TaiTextField: React.FC<TaiTextFieldProps> = ({}) => {
    const webkitbg = {
        "& .MuiInputBase-input.MuiOutlinedInput-input:-webkit-autofill": {
            "-webkit-box-shadow": ` 0 0 0 100px ${colors.background.primary} inset`,
            borderRadius: "inherit",
        },
    }

    return <TextField sx={{ ...textFieldStyle, ...webkitbg }} />
}
