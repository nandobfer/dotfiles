import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from "@mui/material"

interface TextFieldProps extends MuiTextFieldProps<"standard"> {}

export const TextField: React.FC<TextFieldProps> = (props) => {
    return <MuiTextField {...props} variant={props.variant || "standard"} inputRef={props.ref} />
}
