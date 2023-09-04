import React from "react"
import { Box } from "@mui/material"
import { Header } from "../../components/Header"
import { BottomNavigation } from "../../components/BottomNavigation"
import { Route, Routes } from "react-router-dom"
import { Panel } from "./Panel"
import { Reviews } from "./Reviews"
import { ReviewProfile } from "./ReviewProfile"
import { useNavigationList } from "../../hooks/useNavigationList"

interface AdmProps {
    user: User
}

export const Adm: React.FC<AdmProps> = ({ user }) => {
    const bottomMenu = useNavigationList()

    return (
        <Box sx={{ flexDirection: "column", width: "100%" }}>
            <Header />
            <Box sx={{ width: "100%" }}>
                <Routes>
                    <Route index element={<Panel />} />
                    <Route path="reviews" element={<Reviews />} />
                    <Route path="review" element={<ReviewProfile />} />
                </Routes>
            </Box>
            <BottomNavigation section={bottomMenu.admin} />
        </Box>
    )
}
