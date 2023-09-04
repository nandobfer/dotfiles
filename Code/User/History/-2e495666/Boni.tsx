import React, { useState } from "react"
import { Box, Button, IconButton, TextField } from "@mui/material"
import { Form, Formik } from "formik"
import logo from "../assets/logo.png"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"

interface LoginProps {}

interface LoginForm {
    login: string
    password: string
}

export const Login: React.FC<LoginProps> = ({}) => {
    const [showPassword, setShowPassword] = useState(false)

    const initialValues: LoginForm = {
        login: "",
        password: "",
    }

    const handleSubmit = (values: LoginForm) => {
        console.log(values)
    }

    return (
        <Box
            sx={{
                backgroundColor: "primary.main",
                width: "100vw",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "5vw",
            }}
        >
            <img src={logo} alt="Agência Boz" style={{ aspectRatio: "2/1", width: "30vw" }} />
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <Box
                            sx={{
                                padding: "3vw",
                                width: "30vw",
                                backgroundColor: "secondary.main",
                                borderRadius: "3vw",
                                flexDirection: "column",
                                gap: "1vw",
                            }}
                        >
                            <TextField
                                label="Usuário"
                                name="login"
                                value={values.login}
                                onChange={handleChange}
                                placeholder="nome de usuário, email ou cpf"
                                autoComplete="off"
                            />
                            <TextField
                                label="Senha"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                type={showPassword ? "text" : "password"}
                                autoComplete="off"
                                InputProps={{ endAdornment: <IconButton>{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}</IconButton> }}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    color: "white",
                                    fontWeight: "bold",
                                    // width: "50%",
                                    // alignSelf: "flex-end",
                                }}
                            >
                                Entrar
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
