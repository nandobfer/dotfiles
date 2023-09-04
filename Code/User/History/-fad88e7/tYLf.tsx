import { Box, Button, CircularProgress } from "@mui/material"
import { TextField } from "../components/TextField"
import { Form, Formik } from "formik"
import { useState } from "react"
import { useSnackbar } from "burgos-snackbar"

interface LoginProps {}

interface Inputs {
    login: string
    password: string
}

export const Login: React.FC<LoginProps> = ({}) => {
    const { snackbar } = useSnackbar()

    const [loading, setLoading] = useState(false)

    const onSubmit = (values: Inputs) => {
        if (loading) return

        setLoading(true)
        snackbar({ severity: "info", text: JSON.stringify(values) })
        setTimeout(() => setLoading(false), 2000)
    }

    return (
        <Box sx={{ width: "100%", flexDirection: "column", justifyContent: "center", padding: "20vw", gap: "5vw" }}>
            <Formik initialValues={{ login: "", password: "" }} onSubmit={onSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <TextField label="usuário ou e-mail" name="login" value={values.login} onChange={handleChange} />
                        <TextField label="senha" name="password" value={values.password} onChange={handleChange} type="password" autoComplete="off" />
                        <Button variant="contained" type="submit">
                            {loading ? <CircularProgress size="1.5rem" color="secondary" /> : "login"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
