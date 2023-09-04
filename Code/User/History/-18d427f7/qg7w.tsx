import React, { useState } from "react"
import { Box, CircularProgress, IconButton, TextField } from "@mui/material"
import { Form, Formik } from "formik"
import { textFieldStyle } from "../../../style/textfield"
import CheckIcon from "@mui/icons-material/Check"

interface DepartmentFormProps {
    department: Department
    finish: () => void
}

export const DepartmentForm: React.FC<DepartmentFormProps> = ({ department, finish }) => {
    const [loading, setLoading] = useState(false)

    const handleSubmit = (values: { name: string }) => {
        if (loading) return

        setTimeout(() => {
            setLoading(false)
            finish()
        }, 1000)
    }

    return (
        <Formik initialValues={{ name: department.name }} onSubmit={handleSubmit}>
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
                                    {loading ? <CircularProgress size="1.5rem" color="primary" /> : <CheckIcon />}
                                </IconButton>
                            ),
                        }}
                    />
                </Form>
            )}
        </Formik>
    )
}
