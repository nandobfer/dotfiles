import React from "react"
import { Box, Paper, TextField } from "@mui/material"
import { Form, Formik } from "formik"

interface NewCustomerProps {}

export const NewCustomer: React.FC<NewCustomerProps> = ({}) => {
    const initialValues: CustomerForm = {
        name: "",
        recomendations: "",
    }

    const handleSubmit = (values: CustomerForm) => {}

    return (
        <Paper sx={{ bgcolor: "background.default" }}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <TextField />
                    </Form>
                )}
            </Formik>
        </Paper>
    )
}
