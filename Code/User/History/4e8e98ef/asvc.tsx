import { TextField as MuiTextField, TextFieldProps } from "@mui/material"

// interface TextFieldProps {}

export const TextField: React.FC<TextFieldProps> = (props) => {
    return <MuiTextField {...props} />
}
