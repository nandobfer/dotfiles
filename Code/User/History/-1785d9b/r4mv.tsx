import { Box } from "@mui/material"
import { useEffect } from "react"
import { useUser } from "../hooks/useUser"
import { useNavigate } from "react-router-dom"
import { Header } from "../components/Header"
import { useHeader } from "../hooks/useHeader"
import { BottomNavigation } from "../components/BottomNavigation"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const navigate = useNavigate()

    const { user } = useUser()
    const { setTitle } = useHeader()

    useEffect(() => {
        if (!user) navigate("/login")
        setTitle("Safras")
    }, [])

    return (
        <Box sx={{ flexDirection: "column", width: "100%" }}>
            <Header />
            <BottomNavigation />
        </Box>
    )
}
