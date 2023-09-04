import React, { useState } from "react"
import { Box, Button, CircularProgress, IconButton, SxProps, TextField } from "@mui/material"
import { Form, Formik } from "formik"
import logo from "../assets/logo.png"
import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"
import { useUser } from "../hooks/useUser"
import { useDarkMode } from "../hooks/useDarkMode"
import { useColors } from "../hooks/useColors"
import { ModeToggler } from "../components/ModeToggler"

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
    const { login } = useUser()

    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const initialValues: LoginForm = {
        login: "",
        password: "",
    }

    const textFieldStyle: SxProps = {
        "& .MuiInputLabel-root": {
            color: "grey",
        },

        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                // borderColor: "primary.main",
            },
        },
    }

    const handleSubmit = (values: LoginForm) => {
        if (loading) return

        login(values, setLoading)
    }

    return (
        <Box
            sx={{
                backgroundColor: "background.paper",
                width: "100vw",
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "5vw",
            }}
        >
            <img src={logo} alt="agência boz" style={{ aspectRatio: "2/1", width: "30vw" }} />
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <Box
                            sx={{
                                padding: "3vw",
                                width: "30vw",
                                backgroundColor: "background.default",
                                borderRadius: "2.5vw",
                                flexDirection: "column",
                                gap: "1vw",
                            }}
                        >
                            <TextField
                                label="usuário"
                                name="login"
                                value={values.login}
                                onChange={handleChange}
                                placeholder="nome de usuário, email ou cpf"
                                autoComplete="off"
                                required
                                sx={textFieldStyle}
                            />
                            <TextField
                                label="senha"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                type={showPassword ? "text" : "password"}
                                autoComplete="off"
                                required
                                sx={textFieldStyle}
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={() => setShowPassword(!showPassword)} color="primary">
                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    ),
                                }}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                sx={{
                                    color: "secondary.main",
                                    fontWeight: "bold",
                                    // width: "50%",
                                    // alignSelf: "flex-end",
                                }}
                            >
                                {loading ? <CircularProgress size="1.5rem" color="secondary" /> : "entrar"}
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
            <ModeToggler />
        </Box>
    )
}
