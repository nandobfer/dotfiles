import React from "react"
import { Box, SxProps, TextField } from "@mui/material"
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
    const style: SxProps = { ...textFieldStyle, flex: 0.5 }
    return (
        <>
            <Container name="Informações Pessoais">
                <TextField label="Nome" name="name" value={values.name} onChange={handleChange} sx={style} required />
                <TextField label="Nome de usuário" name="username" value={values.username} onChange={handleChange} sx={style} required />
            </Container>
        </>
    )
}
