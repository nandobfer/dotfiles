import React from "react"
import { Box, Paper } from "@mui/material"
import { Form, Formik } from "formik"

interface NewCustomerProps {}

export const NewCustomer: React.FC<NewCustomerProps> = ({}) => {
    return (
        <Paper sx={{ bgcolor: "background.default" }}>
            <Formik>{({ values, handleChange }) => <Form></Form>}</Formik>
        </Paper>
    )
}
