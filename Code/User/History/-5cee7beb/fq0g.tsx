import React, { useState } from "react"
import { Box, Checkbox, ListItemText, MenuItem, OutlinedInput, Paper, Select, TextField } from "@mui/material"
import { Form, Formik } from "formik"
import { selectMenuStyle } from "../../../style/selectMenuStyle"
import { textFieldStyle } from "../../../style/textfield"
import { useCustomers } from "../../../hooks/useCustomers"

interface NewCustomerProps {}

export const NewCustomer: React.FC<NewCustomerProps> = ({}) => {
    const { services } = useCustomers()

    const [selectedServices, setSelectedServices] = useState<Service[]>([])

    const initialValues: CustomerForm = {
        name: "",
        recomendations: "",
    }

    const handleSubmit = (values: CustomerForm) => {}

    const handleServiceSelect = (child: any) => {
        const id = child.props.value as Number
        const service = services.find((item) => item.id == id) as Service

        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter((item) => item.id != service.id))
        } else {
            setSelectedServices([...selectedServices, service])
        }
    }

    return (
        <Paper sx={{ bgcolor: "background.default", flexDirection: "column" }}>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <TextField label="nome" name="name" value={values.name} onChange={handleChange} />
                        <Select
                            name="services"
                            multiple
                            value={selectedServices}
                            onChange={(_, child) => handleServiceSelect(child)}
                            input={<OutlinedInput label="serviços" sx={textFieldStyle} />}
                            renderValue={(selected) => selected.map((role) => role.name).join(", ")}
                            MenuProps={{ sx: selectMenuStyle }}
                        >
                            {services.map((service) => (
                                <MenuItem key={service.id} value={service.id}>
                                    <Checkbox checked={selectedServices.includes(service)} />
                                    <ListItemText primary={service.name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </Form>
                )}
            </Formik>
        </Paper>
    )
}
