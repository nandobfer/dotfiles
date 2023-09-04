import { Box, Button } from "@mui/material"
import { TextField } from "../components/TextField"
import { Form, Formik } from "formik"

interface LoginProps {}

interface Inputs {
    login: string
    password: string
}

export const Login: React.FC<LoginProps> = ({}) => {
    const onSubmit = (values: Inputs) => {
        console.log(values)
    }

    return (
        <Box sx={{ width: "100%", flexDirection: "column" }}>
            <Formik initialValues={{ login: "", password: "" }} onSubmit={onSubmit}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <TextField {...register("login")} />
                    <TextField {...register("password")} />
                    <Button variant="contained" type="submit">
                        login
                    </Button>
                </Form>
            </Formik>
        </Box>
    )
}
