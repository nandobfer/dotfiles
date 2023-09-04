import React, { useState } from "react"
import { Box, Button, Paper, SxProps, TextField } from "@mui/material"
import { Formik, Form as Formu } from "formik"
import { Avatar } from "@files-ui/react"

interface FormProps {
    user: User
}

export const Form: React.FC<FormProps> = ({ user }) => {
    const [image, setImage] = useState<File>()

    const initialValues: Business = {
        date: "",
        id: 0,
        userId: user.id,
        user: user,

        name: "",
        email: "",
        document: "",
        phone: "",

        image: "",

        service: false,
        store: false,
    }

    const paperStyle: SxProps = {
        flexDirection: "column",
        width: "100%",
        padding: "5vw",
        gap: "5vw",
        borderRadius: "5vw",
    }

    const handleSubmit = (values: Business) => {
        console.log(values)
    }

    return (
        <Box sx={{ flexDirection: "column", width: "100%", gap: "5vw", height: "100%", overflowY: "auto", paddingBottom: "10vw" }}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Formu>
                        <Paper sx={paperStyle}>
                            <p style={{ fontSize: "5vw" }}>Informações Básicas</p>
                            <Box sx={{ flexDirection: "column", gap: "3vw" }}>
                                <TextField label="Nome" name="name" value={values.name} onChange={handleChange} />
                                <TextField label="E-mail" name="email" value={values.email} onChange={handleChange} />
                                <TextField label="CPF / CNPJ" name="document" value={values.document} onChange={handleChange} />
                                <TextField label="Telefone" name="phone" value={values.phone} onChange={handleChange} />
                            </Box>
                        </Paper>

                        <Paper sx={paperStyle}>
                            <p style={{ fontSize: "5vw" }}>Foto do perfil</p>
                            <Avatar
                                src={image}
                                onChange={(file) => setImage(file)}
                                smartImgFit={"orientation"}
                                changeLabel="Clique para trocar a imagem"
                                emptyLabel="Clique para enviar uma imagem"
                                // style={{ width: "100%", height: "30vw" }}
                                style={{
                                    width: "70vw",
                                    height: "70vw",
                                    borderRadius: "5vw",
                                }}
                            />
                        </Paper>

                        <Button variant="contained" type="submit">
                            Confirmar
                        </Button>
                    </Formu>
                )}
            </Formik>
        </Box>
    )
}
