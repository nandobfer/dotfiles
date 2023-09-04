import { Box } from "@mui/material"
import { TextField } from "../components/TextField"
import { useForm, SubmitHandler } from "react-hook-form"

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
    return (
        <Box sx={{ width: "100%" }}>
            <TextField />
        </Box>
    )
}
