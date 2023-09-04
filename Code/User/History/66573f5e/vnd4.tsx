import { Box, Button, CircularProgress } from "@mui/material"
import { TextField } from "../components/TextField"
import { useNavigate } from "react-router-dom"
import { Form, Formik } from "formik"
import { useSignup } from "../hooks/useSignup"
import { useUser } from "../hooks/useUser"
import { IMaskInput } from "react-imask"
import { useCpfMask } from "burgos-masks"
import type { MaskitoOptions } from "@maskito/core"
import { useMaskito } from "@maskito/react"

const MaskedInput = () => {
    const digitsOnlyMask: MaskitoOptions = {
        mask: useCpfMask,
    }
    const inputRef = useMaskito({ options: digitsOnlyMask })

    return <input type="text" ref={inputRef} />
}

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
                        <TextField
                            label="documento"
                            name="document"
                            onChange={handleChange}
                            value={values.document}
                            InputProps={{
                                inputComponent: MaskedInput,
                                inputProps: {
                                    mask: "",
                                },
                            }}
                        />
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
