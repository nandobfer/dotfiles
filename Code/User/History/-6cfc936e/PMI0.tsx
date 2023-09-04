import React, { useEffect, useState } from "react"
import { Box, Paper, TextField } from "@mui/material"
import { Formik, Form as Formu } from "formik"
import { Avatar, ExtFile, FileInputButton } from "@files-ui/react"
import colors from "../../../style/colors"

interface FormProps {
    user: User
}

export const Form: React.FC<FormProps> = ({ user }) => {
    const [image, setImage] = useState<ExtFile>()

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

    const handleSubmit = (values: Business) => {
        console.log(values)
    }

    useEffect(() => {
        console.log(image)
    }, [image])

    return (
        <Box sx={{ flexDirection: "column", width: "100%", gap: "5vw" }}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Formu>
                        <Paper sx={{ flexDirection: "column", width: "100%", padding: "10vw 5vw", gap: "5vw" }}>
                            <p style={{ fontSize: "5vw" }}>Informações Básicas</p>
                            <Box sx={{ flexDirection: "column", gap: "3vw" }}>
                                <TextField label="Nome" name="name" value={values.name} onChange={handleChange} />
                                <TextField label="E-mail" name="email" value={values.email} onChange={handleChange} />
                                <TextField label="CPF / CNPJ" name="document" value={values.document} onChange={handleChange} />
                                <TextField label="Telefone" name="phone" value={values.phone} onChange={handleChange} />
                            </Box>
                        </Paper>

                        <Paper sx={{ flexDirection: "column", width: "100%", padding: "10vw 5vw", gap: "5vw" }}>
                            <Avatar
                                src={image}
                                onChange={(file) => setImage(file)}
                                smartImgFit={"orientation"}
                                changeLabel="Clique para remover a imagem"
                                // style={{ width: "100%", height: "30vw" }}
                                style={{
                                    // width: "10.94vw",
                                    // height: "10.94vw",
                                    borderRadius: "0.5vw",
                                }}
                            />
                            {/* <FileInputButton
                                onChange={(files) => setFiles(files)}
                                value={files}
                                behaviour="replace"
                                label="Enviar imagem"
                                accept="image/*"
                                color={colors.primary}
                                style={{ width: "12vw", padding: "0.5vw" }}
                            /> */}
                        </Paper>
                    </Formu>
                )}
            </Formik>
        </Box>
    )
}
