import React from "react"
import { Box, TextField } from "@mui/material"
import { Container } from "./UserComponents"

interface UserFormProps {
    values: UserForm
    handleChange: {
        (e: React.ChangeEvent<any>): void
        <T = string | React.ChangeEvent<any>>(field: T): T extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void
    }
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
