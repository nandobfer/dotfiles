import React, { useState } from "react"
import { Box, CircularProgress, IconButton, TextField } from "@mui/material"
import { Form, Formik } from "formik"
import { textFieldStyle } from "../../../style/textfield"

interface DepartmentFormProps {
    department: Department
}

export const DepartmentForm: React.FC<DepartmentFormProps> = ({ department }) => {
    const [loading, setLoading] = useState(false)

    const handleSubmit = (values: { name: string }) => {}

    return (
        <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
            {({ values, handleChange }) => (
                <Form>
                    <TextField
                        label="atualizar departamento"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        sx={{ ...textFieldStyle, width: "21.5vw" }}
                        required
                        InputProps={{
                            endAdornment: (
                                <IconButton color={"primary"} type="submit">
                                    {loading ? <CircularProgress size="1.5rem" color="primary" /> : <AddIcon />}
                                </IconButton>
                            ),
                        }}
                    />
                </Form>
            )}
        </Formik>
    )
}
