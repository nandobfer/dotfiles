import React from "react"
import { Box, Paper, TextField } from "@mui/material"
import { useCustomers } from "../../../hooks/useCustomers"
import { Tag } from "../../../components/Tag"
import { Form, Formik } from "formik"

interface ServicesProps {}

export const Services: React.FC<ServicesProps> = ({}) => {
    const { services } = useCustomers()

    const initialValues: ServiceForm = {
        name: "",
        tag: "",
    }

    const handleNewService = (values: ServiceForm) => {}

    return (
        <Paper sx={{ gap: "1vw", bgcolor: "background.default", flexDirection: "column", padding: "1vw" }}>
            <p>Serviços</p>
            <Box sx={{ gap: "0.5vw" }}>
                {services.map((service) => (
                    <Tag key={service.id} name={service.tag} fontSize="0.8vw" />
                ))}
                <Formik initialValues={initialValues} onSubmit={handleNewService}>
                    {({ values, handleChange }) => (
                        <Form>
                            <TextField variant="standard" />
                        </Form>
                    )}
                </Formik>
            </Box>
        </Paper>
    )
}
