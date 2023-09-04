import React from "react"
import { Box, SxProps, TextField } from "@mui/material"
import { Form, Formik } from "formik"

interface NewServiceProps {}

export const NewService: React.FC<NewServiceProps> = ({}) => {
    const initialValues: ServiceForm = {
        name: "",
        tag: "",
    }

    const textfieldStyle: SxProps = { width: "5vw" }

    const handleNewService = (values: ServiceForm) => {}

    return (
        <Box sx={{}}>
            <Formik initialValues={initialValues} onSubmit={handleNewService}>
                {({ values, handleChange }) => (
                    <Form>
                        <TextField label="nome" name="name" value={values.name} onChange={handleChange} variant="standard" sx={textfieldStyle} />
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
