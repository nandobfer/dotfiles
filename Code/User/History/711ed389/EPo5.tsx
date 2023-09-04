import React from "react"
import { Signup } from "./Signup"
import { Box } from "@mui/material"

interface BusinessProps {
    user: User
}

export const Business: React.FC<BusinessProps> = ({ user }) => {
    return (
        <Box sx={{ flexDirection: "column", width: "100%" }}>
            {user.business ? (
                <></>
            ) : (
                <Box sx={{ padding: "10vw", width: "100vw" }}>
                    <Signup user={user}></Signup>
                </Box>
            )}
        </Box>
    )
}
