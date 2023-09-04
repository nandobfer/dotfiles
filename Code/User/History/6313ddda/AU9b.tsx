import React from "react"
import { Box, TextField } from "@mui/material"
import { Container } from "./UserComponents"
import { textFieldStyle } from "../../style/textfield"

interface UserFormProps {
    values: UserForm
    handleChange: {
        (e: React.ChangeEvent<any>): void
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void
    }
}

export const UserForm: React.FC<UserFormProps> = ({ values, handleChange }) => {
    return (
        <Box sx={{}}>
            <Container name="Informações Pessoais">
                <TextField label="Nome de usuário" name="username" value={values.username} onChange={handleChange} sx={textFieldStyle} required />
            </Container>
        </Box>
    )
}
