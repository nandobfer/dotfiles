import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from "@mui/material"
import { Variant } from "@mui/material/styles/createTypography"

interface TextFieldProps extends MuiTextFieldProps<Variant extends "standart"> {}

export const TextField: React.FC<TextFieldProps> = (props) => {
    return <MuiTextField {...props} />
}
