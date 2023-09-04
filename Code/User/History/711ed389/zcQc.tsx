import React from "react"
import { Signup } from "./Signup"
import { Box } from "@mui/material"
import { Route, Routes } from "react-router"
import { Header } from "../../components/Header"

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
                <Box sx={{ padding: "10vw", width: "100vw" }}>
                    <Routes>
                        <Route index element={<Signup user={user}></Signup>} />
                    </Routes>
                </Box>
            )}
        </Box>
    )
}
