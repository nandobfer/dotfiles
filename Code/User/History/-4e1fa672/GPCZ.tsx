import React from "react"
import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"

interface PasswordProps {}

export const Password: React.FC<PasswordProps> = ({}) => {
    return (
        <Routes>
            <Route path="forgot" />
        </Routes>
    )
}
