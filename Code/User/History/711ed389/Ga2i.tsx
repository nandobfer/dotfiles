import React from "react"
import { Signup } from "./Signup"
import { Box } from "@mui/material"
import { Route, Routes } from "react-router"
import { Header } from "../../components/Header"
import { Form } from "./Signup/Form"
import { Verification } from "./Signup/Verification"

interface BusinessProps {
    user: User
}

export const Business: React.FC<BusinessProps> = ({ user }) => {
    return (
        <Box sx={{ paddingTop: "5vh" }}>
            <Header />
            {user.business ? (
                user.business.active ? (
                    <></>
                ) : (
                    <Verification />
                )
            ) : (
                <Box sx={{ padding: "10vw 10vw 0", width: "100vw" }}>
                    <Routes>
                        <Route index element={<Signup user={user}></Signup>} />
                        <Route path="form" element={<Form user={user}></Form>} />
                    </Routes>
                </Box>
            )}
        </Box>
    )
}
