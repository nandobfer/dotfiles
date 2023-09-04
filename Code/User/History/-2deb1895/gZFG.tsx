import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import { User } from "../../definitions/user"
import { useApi } from "../../hooks/useApi"

interface ResetProps {}

export const Reset: React.FC<ResetProps> = ({}) => {
    const hash = useParams().hash
    const api = useApi()

    const [user, setUser] = useState<User>()

    useEffect(() => {
        api.
    }, [])

    return <Box sx={{}}></Box>
}
