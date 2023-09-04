import React from "react"
import { Box } from "@mui/material"
import { useColors } from "../../hooks/useColors"
import { TextField } from "../../components/TextField"
import { Form, Formik } from "formik"

interface ForgotProps {}

export const Forgot: React.FC<ForgotProps> = ({}) => {
    const colors = useColors()

    const handleSubmit = (values: { user: string }) => {
        console.log(values)
    }

    return (
        <Box sx={{ flexDirection: "column", backgroundColor: colors.purple, width: "100%", padding: "10vw", color: "white" }}>
            <h3 style={{ alignSelf: "center" }}>Esqueci minha senha</h3>
            <p>
                Digite o e-mail, nome de usuário ou cpf da sua conta. Caso exista, enviaremos um link para o e-mail associado a conta contendo as
                instruções para atualização da senha.
            </p>
            <Formik initialValues={{ user: "" }} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <TextField label="E-mail, CPF ou nome de usuário" value={values.user} onChange={handleChange} name="user" required />
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
