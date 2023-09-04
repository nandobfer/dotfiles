import React from "react"
import { Signup } from "./Signup"
import { Box } from "@mui/material"
import { Route, Routes } from "react-router"
import { Header } from "../../components/Header"
import { Form } from "./Signup/Form"

interface BusinessProps {
    user: User
}

export const Business: React.FC<BusinessProps> = ({ user }) => {
    return (
        <Box sx={{ paddingTop: "5vh" }}>
            <Header />
            {user.business ? (
                <></>
            ) : (
                <Box sx={{ padding: "10vw", width: "100vw", height: "100%", overflowY: "auto" }}>
                    <Routes>
                        <Route index element={<Signup user={user}></Signup>} />
                        <Route path="form" element={<Form user={user}></Form>} />
                    </Routes>
                </Box>
            )}
        </Box>
    )
}
