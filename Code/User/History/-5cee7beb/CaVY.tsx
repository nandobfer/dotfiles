import React, { useState } from "react"
import { Box, Checkbox, ListItemText, MenuItem, OutlinedInput, Paper, Select, TextField } from "@mui/material"
import { Form, Formik } from "formik"
import { selectMenuStyle } from "../../../style/selectMenuStyle"
import { textFieldStyle } from "../../../style/textfield"
import { useCustomers } from "../../../hooks/useCustomers"

interface NewCustomerProps {}

export const NewCustomer: React.FC<NewCustomerProps> = ({}) => {
    const { services } = useCustomers()

    const [selectedRoles, setSelectedRoles] = useState<Role[]>([])

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
                            input={<OutlinedInput label="funções" sx={textFieldStyle} />}
                            renderValue={(selected) => selected.map((role) => role.name).join(", ")}
                            MenuProps={{ sx: selectMenuStyle }}
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
