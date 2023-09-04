import { SxProps } from "@mui/material"

export const textFieldStyle: SxProps = {
    "& .MuiInputLabel-root": {
        color: "grey",
    },

    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            // borderColor: "primary.main",
        },
    },

    "& .MuiStandardInput-root": {
        "& fieldset": {
            borderColor: "primary.main",
        },
    },
}
