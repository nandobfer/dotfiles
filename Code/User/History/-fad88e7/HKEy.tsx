import { Box } from "@mui/material"
import { TextField } from "../components/TextField"
import { useForm } from "react-hook-form"

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
    const { register, handleSubmit } = useForm()

    return (
        <Box sx={{ width: "100%" }}>
            <form action="">
                <TextField {...register("login")} />
                <TextField {...register("password")} />
            </form>
        </Box>
    )
}
