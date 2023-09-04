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

    "& .MuiInput-root": {
        "&::before": {
            borderColor: "secondary.main",
        },
        "&::before:hover": {
            borderColor: "secondary.main",
        },
    },
}
