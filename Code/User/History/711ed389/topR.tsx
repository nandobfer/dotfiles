import React from "react"
import { Signup } from "./Signup"
import { Box } from "@mui/material"

interface BusinessProps {
    user: User
}

export const Business: React.FC<BusinessProps> = ({ user }) => {
    return user.business ? <></> : <Box sx={{padding: '10vw'}}>
        <Signup user={user}></Signup>
    </Box>
}
