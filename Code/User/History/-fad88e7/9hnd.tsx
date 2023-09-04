import { Box } from "@mui/material"
import { TextField } from "../components/TextField"
import { useForm, SubmitHandler } from "react-hook-form"

interface LoginProps {}

interface Inputs {
    login: ""
    password: ""
}

export const Login: React.FC<LoginProps> = ({}) => {
    const { register, handleSubmit } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (values) => {
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
