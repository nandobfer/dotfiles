import { Box, Button, CircularProgress } from "@mui/material"
import { TextField } from "../components/TextField"
import { Form, Formik } from "formik"
import { useSnackbar } from "burgos-snackbar"
import { useIo } from "../hooks/useIo"
import { useUser } from "../hooks/useUser"
import { useNavigate } from "react-router"

interface LoginProps {}

interface Inputs {
    login: string
    password: string
}

export const Login: React.FC<LoginProps> = ({}) => {
    const io = useIo()
    const navigate = useNavigate()

    const { snackbar } = useSnackbar()
    const { login, loginLoading, setLoginLoading } = useUser()

    const onSubmit = (values: Inputs) => {
        if (loginLoading) return
        if (io.disconnected) {
            snackbar({ severity: "error", text: "Não foi possível fazer login pois não há conexão com o servidor" })
            return
        }

        setLoginLoading(true)
        login(values)
    }

    return (
        <Box sx={{ width: "100%", flexDirection: "column", justifyContent: "center", padding: "20vw", gap: "5vw" }}>
            <Formik initialValues={{ login: "", password: "" }} onSubmit={onSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <TextField label="cpf ou e-mail" name="login" value={values.login} onChange={handleChange} />
                        <TextField label="senha" name="password" value={values.password} onChange={handleChange} type="password" autoComplete="off" />
                        <Button variant="contained" type="submit">
                            {loginLoading ? <CircularProgress size="1.5rem" color="secondary" /> : "login"}
                        </Button>
                    </Form>
                )}
            </Formik>
            <Button variant="outlined" onClick={() => navigate("/signup")}>
                Cadastre-se
            </Button>
        </Box>
    )
}
