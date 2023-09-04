import { Box } from "@mui/material"
import { useEffect } from "react"
import { useUser } from "../hooks/useUser"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const { user } = useUser()

    useEffect(() => {}, [])

    return <Box sx={{}}></Box>
}
