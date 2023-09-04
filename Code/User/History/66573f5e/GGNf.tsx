import { Box, Button, CircularProgress } from "@mui/material"
import { TextField } from "../components/TextField"
import { useNavigate } from "react-router-dom"
import { Form, Formik } from "formik"
import { useSignup } from "../hooks/useSignup"
import { useUser } from "../hooks/useUser"
import type { MaskitoOptions } from "@maskito/core"
import { useMaskito } from "@maskito/react"
import { useCpfMask } from "burgos-masks"

interface SignupProps {}

interface Inputs {
    email: string
    document: string
    password: string
    name: string
    username: string
}

export const Signup: React.FC<SignupProps> = ({}) => {
    const navigate = useNavigate()
    const signup = useSignup()
    const cpfMask = useCpfMask()

    const test: MaskitoOptions = {
        mask: /^\d+$/,
    }
    const inputRef = useMaskito({ options: test })

    const { signupLoading, setSignupLoading } = useUser()

    const handleSubmit = (values: Inputs) => {
        setSignupLoading(true)
        signup(values)
    }

    return (
        <Box sx={{ width: "100%", flexDirection: "column", justifyContent: "center", padding: "20vw", gap: "5vw" }}>
            <p>Preencha os campos abaixo para fazer o cadastro:</p>
            <Formik initialValues={{ username: "", email: "", document: "", password: "", name: "" }} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <TextField label="nome" name="name" value={values.name} onChange={handleChange} />
                        <TextField label="nome de usuário" name="username" value={values.username} onChange={handleChange} />
                        <TextField label="e-mail" name="email" value={values.email} onChange={handleChange} />
                        <TextField label="documento" name="document" value={values.document} onChange={handleChange} inputRef={inputRef} />
                        <TextField label="senha" name="password" value={values.password} onChange={handleChange} type="password" autoComplete="off" />
                        <Button variant="contained" type="submit">
                            {signupLoading ? <CircularProgress size="1.5rem" color="secondary" /> : "Enviar"}
                        </Button>
                    </Form>
                )}
            </Formik>
            <Button variant="contained" onClick={() => navigate("/login")}>
                Voltar
            </Button>
        </Box>
    )
}