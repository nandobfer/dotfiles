import { Box } from "@mui/material"
import { TextField } from "../components/TextField"
import { useForm } from "react-hook-form"

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
    const { register, handleSubmit } = useForm()

    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <Box sx={{ width: "100%" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField {...register("login")} />
                <TextField {...register("password")} />
            </form>
        </Box>
    )
}
