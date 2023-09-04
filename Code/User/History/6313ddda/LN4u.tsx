import React from "react"
import { Box, TextField } from "@mui/material"
import { Container } from "./UserComponents"

interface UserFormProps {
    values: UserForm
    handleChange: React.ChangeEvent<any>
}

export const UserForm: React.FC<UserFormProps> = ({}) => {
    return (
        <Box sx={{}}>
            <Container name="Informações Pessoais">
                <TextField />
            </Container>
        </Box>
    )
}
