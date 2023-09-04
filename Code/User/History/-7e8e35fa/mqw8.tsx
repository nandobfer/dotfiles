import React from "react"
import { Box } from "@mui/material"

interface UserPageProps {
    user?: User
}

export const UserPage: React.FC<UserPageProps> = ({ user }) => {
    const initialValues: UserForm = {
        name: "",
        email: "",
        username: "",
        cpf: "",
        birth: "",
        role: 0,
    }

    return <Box sx={{}}></Box>
}
