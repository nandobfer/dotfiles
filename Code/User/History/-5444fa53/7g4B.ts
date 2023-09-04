import { SxProps } from "@mui/material"
import { useDarkMode } from "../hooks/useDarkMode"

export const textFieldStyle: SxProps = {
    "& .MuiInputLabel-root": {
        color: "grey",
    },

    // não funciona
    "& .MuiInputLabel-root:focus": {
        color: "primary.main",
    },

    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            // borderColor: "primary.main",
        },
    },

    "& .MuiInput-root": {
        "&::before": {
            bgcolor: "red",
            borderColor: "secondary.main",
        },
    },
    "& .MuiInput-root:hover": {
        "&::before": {
            borderColor: "secondary.main",
        },
    },
    "& .MuiInputBase-root": {
        borderRadius: "0 1vw 0vw 1vw",
    },
}
