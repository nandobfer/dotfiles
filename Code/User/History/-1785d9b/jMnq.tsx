import { Box } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import { Header } from "../components/Header"
import { BottomNavigation } from "../components/BottomNavigation"
import { Crops } from "./Crops"
import { Chats } from "./Chats"
import { Search } from "./Search"

interface HomeProps {
    user: User
}

export const Home: React.FC<HomeProps> = ({ user }) => {
    return (
        <Box sx={{ flexDirection: "column", width: "100%", padding: "10vh 0" }}>
            <Header />
            <Routes>
                <Route index element={<Crops />} />
                <Route path="chats/*" element={<Chats channel="buyer" />} />
                <Route path="search" element={<Search user={user} />} />
            </Routes>
            <BottomNavigation />
        </Box>
    )
}
