import { Box } from "@mui/material"
import { useEffect } from "react"
import { useUser } from "../hooks/useUser"
import { useNavigate } from "react-router-dom"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const navigate = useNavigate()

    const { user } = useUser()

    useEffect(() => {
        if (!user) navigate("/login")
    }, [])

    return <Box sx={{}}></Box>
}
