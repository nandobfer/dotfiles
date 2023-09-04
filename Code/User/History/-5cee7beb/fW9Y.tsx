import React from "react"
import { Box, Paper, Select, TextField } from "@mui/material"
import { Form, Formik } from "formik"

interface NewCustomerProps {}

export const NewCustomer: React.FC<NewCustomerProps> = ({}) => {
    const initialValues: CustomerForm = {
        name: "",
        recomendations: "",
    }

    const handleSubmit = (values: CustomerForm) => {}

    const handleRoleSelect = (child: any) => {
        const id = child.props.value as Number
        const role = roles.find((item) => item.id == id) as Role

        if (selectedRoles.includes(role)) {
            setSelectedRoles(selectedRoles.filter((item) => item.id != role.id))
        } else {
            setSelectedRoles([...selectedRoles, role])
        }
    }

    return (
        <Paper sx={{ bgcolor: "background.default" }}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <TextField />
                        <Select
                            name="roles"
                            multiple
                            value={selectedRoles}
                            onChange={(_, child) => handleRoleSelect(child)}
                            input={<OutlinedInput label="funções" />}
                            renderValue={(selected) => selected.map((role) => role.name).join(", ")}
                            MenuProps={{ sx: selectMenuStyle }}
                            sx={textFieldStyle}
                        >
                            {roles.map((role) => (
                                <MenuItem key={role.id} value={role.id}>
                                    <Checkbox checked={selectedRoles.includes(role)} />
                                    <ListItemText primary={role.name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </Form>
                )}
            </Formik>
        </Paper>
    )
}
