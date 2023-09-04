import React, { useEffect } from "react"
import { Signup } from "./Signup"
import { Box, Paper, SxProps } from "@mui/material"
import { Route, Routes } from "react-router"
import { Header } from "../../components/Header"
import { Form } from "./Signup/Form"
import { Verification } from "./Signup/Verification"
import { useHeader } from "../../hooks/useHeader"
import { Account } from "../../components/Account"
import { BottomNavigation } from "../../components/BottomNavigation"
import { Stats } from "../../components/Stats"
import { Avatar } from "@files-ui/react"
import { InfoDetails } from "../../components/InfoDetails"
import { MyBusiness } from "../../components/MyBusiness"
import { useNavigationList } from "../../hooks/useNavigationList"
//import { Carousel } from "react-responsive-carousel"

interface BusinessProps {
    user: User
}

export const Business: React.FC<BusinessProps> = ({ user }) => {
    const header = useHeader()
    const bottomMenu = useNavigationList()

    useEffect(() => {
        header.setTitle("Meu Negócio")
    }, [])
    return (
        <Box sx={{ width: "100%", padding: "12vh 0vw 10vh 0vw" }}>
            <Header />
            {user.business ? (
                user.business.active ? (
                    <>
                        <MyBusiness business={user.business} />
                        <BottomNavigation section={bottomMenu.business} />
                    </>
                ) : (
                    <Verification />
                )
            ) : (
                <Box sx={{ padding: "10vw 10vw 0", width: "100%" }}>
                    <Routes>
                        <Route index element={<Signup user={user}></Signup>} />
                        <Route path="form" element={<Form user={user}></Form>} />
                    </Routes>
                </Box>
            )}
        </Box>
    )
}
