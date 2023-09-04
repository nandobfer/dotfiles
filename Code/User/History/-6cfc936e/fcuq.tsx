import React, { useState } from "react"
import { Box, Button, Checkbox, CircularProgress, FormControlLabel, Paper, SxProps, TextField } from "@mui/material"
import { Formik, Form as Formu } from "formik"
import { Avatar } from "@files-ui/react"
import { useBusinesses } from "../../../hooks/useBusinesses"
import { useSnackbar } from "burgos-snackbar"

interface FormProps {
    user: User
}

export const Form: React.FC<FormProps> = ({ user }) => {
    const businesses = useBusinesses()

    const { snackbar } = useSnackbar()

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

        active: false,
        service: false,
        store: false,
    }

    const paperStyle: SxProps = {
        flexDirection: "column",
        width: "100%",
        padding: "5vw",
        gap: "3vw",
        borderRadius: "5vw",
    }

    const handleSubmit = (values: Business) => {
        if (businesses.loading) return

        if (!values.store && !values.service) {
            snackbar({ severity: "error", text: "Selecione pelo menos uma das opções acima" })
            return
        }

        if (!image) {
            snackbar({ severity: "error", text: "Envie uma imagem" })
            return
        }

        businesses.new({ ...values, file: image })
    }

    return (
        <Box sx={{ flexDirection: "column", width: "100%", gap: "5vw", height: "100%", overflowY: "auto", paddingBottom: "10vw" }}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Formu>
                        <Paper sx={paperStyle}>
                            <p style={{ fontSize: "5vw" }}>Informações Básicas</p>
                            <Box sx={{ flexDirection: "column", gap: "3vw" }}>
                                <TextField variant="standard" label="Nome" name="name" value={values.name} onChange={handleChange} required />
                                <TextField variant="standard" label="E-mail" name="email" value={values.email} onChange={handleChange} required />
                                <TextField
                                    variant="standard"
                                    label="CPF / CNPJ"
                                    name="document"
                                    value={values.document}
                                    onChange={handleChange}
                                    required
                                />
                                <TextField variant="standard" label="Telefone" name="phone" value={values.phone} onChange={handleChange} required />
                                <Box sx={{ justifyContent: "space-between" }}>
                                    <FormControlLabel label="Loja" control={<Checkbox onChange={handleChange} name="store" value={values.store} />} />
                                    <FormControlLabel
                                        label="Serviço"
                                        control={<Checkbox onChange={handleChange} name="service" value={values.service} />}
                                    />
                                </Box>
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
                            {businesses.loading ? <CircularProgress color="secondary" size="1.5rem" /> : "Confirmar"}
                        </Button>
                    </Formu>
                )}
            </Formik>
        </Box>
    )
}
