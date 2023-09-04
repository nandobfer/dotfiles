import React from "react"
import { Box, TextField } from "@mui/material"
import { Form, Formik } from "formik"

interface NewServiceProps {}

export const NewService: React.FC<NewServiceProps> = ({}) => {
    const initialValues: ServiceForm = {
        name: "",
        tag: "",
    }

    const handleNewService = (values: ServiceForm) => {}
    return (
        <Box sx={{}}>
            <Formik initialValues={initialValues} onSubmit={handleNewService}>
                {({ values, handleChange }) => (
                    <Form>
                        <TextField variant="standard" sx={{ width: "5vw" }} />
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
