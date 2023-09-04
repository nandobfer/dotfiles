import React, { useState } from "react"
import { Box, Button, CircularProgress, MenuItem, TextField } from "@mui/material"
import { Form, Formik } from "formik"
import CheckIcon from "@mui/icons-material/Check"
import { Avatar } from "@files-ui/react"
import { useDepartments } from "../../../hooks/useDepartments"

interface NewUserProps {
    user: User
}

export const NewUser: React.FC<NewUserProps> = ({ user }) => {
    const { departments } = useDepartments()

    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState<File>()

    const initialValues: UserForm = {
        name: "",
        email: "",
        username: "",
        cpf: "",
        birth: "",
        department: 0,
        role: 0,
    }

    const handleSubmit = (values: UserForm) => {}

    return (
        <Box sx={{ padding: "2vw", justifyContent: "space-between", width: "100vw" }}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <Avatar
                            src={image}
                            onChange={(file) => setImage(file)}
                            smartImgFit={"orientation"}
                            changeLabel="trocar a imagem"
                            emptyLabel="enviar imagem"
                            // style={{ width: "100%", height: "30vw" }}
                            style={{
                                width: "20vw",
                                height: "20vw",
                                borderRadius: "20vw",
                                fontSize: "2.5vw",
                            }}
                        />
                        <Box sx={{ gap: "1vw", width: "74vw" }}>
                            <Box sx={{ flexDirection: "column", gap: "1vw", flex: 1 }}>
                                <TextField label="nome" name="name" value={values.name} onChange={handleChange} />
                                <TextField label="e-mail" name="email" value={values.email} onChange={handleChange} />
                                <TextField label="nome de usuário" name="username" value={values.username} onChange={handleChange} />
                                <TextField label="cpf" name="cpf" value={values.cpf} onChange={handleChange} />
                                <TextField label="data de nascimento" name="birth" value={values.birth} onChange={handleChange} />
                            </Box>
                            <Box sx={{ flexDirection: "column", gap: "1vw", flex: 1 }}>
                                <TextField
                                    label="departamento"
                                    name="department"
                                    value={values.department}
                                    onChange={handleChange}
                                    select
                                    SelectProps={{
                                        MenuProps: {
                                            sx: {
                                                "& .MuiList-root": {
                                                    bgcolor: "background.default",
                                                },
                                                "&& .Mui-selected": {
                                                    bgcolor: "background.paper",
                                                    color: "secondary.main",
                                                },
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem value={0} sx={{ display: "none" }}></MenuItem>
                                    {departments.map((department) => (
                                        <MenuItem key={department.id} value={department.id}>
                                            {department.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Box>
                        </Box>

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                color: "secondary.main",
                                fontWeight: "bold",
                                position: "fixed",
                                bottom: "2vw",
                                right: "2vw",
                                borderRadius: "50%",
                                width: "5vw",
                                height: "5vw",
                            }}
                        >
                            {loading ? (
                                <CircularProgress sx={{ color: "secondary.main", width: "100%", height: "100%" }} />
                            ) : (
                                <CheckIcon sx={{ width: "100%", height: "100%" }} />
                            )}
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
