import { Box } from "@mui/material"
import { useEffect } from "react"
import { useUser } from "../hooks/useUser"
import { Route, Routes, useNavigate } from "react-router-dom"
import { Header } from "../components/Header"
import { BottomNavigation } from "../components/BottomNavigation"
import { Crops } from "./Crops"
import { Chats } from "./Chats"
import { Search } from "./Search"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const navigate = useNavigate()

    const { user } = useUser()

    useEffect(() => {
        if (!user) navigate("/login")
    }, [])

    return (
        <Box sx={{ flexDirection: "column", width: "100%", padding: "8vh 0 10vh 0" }}>
            <Header />
            <Routes>
                <Route index element={<Crops />} />
                <Route path="chats/*" element={<Chats channel="buyer" />} />
                <Route path="search" element={<Search />} />
            </Routes>
            <BottomNavigation />
        </Box>
    )
}
