import React, { useState } from "react"
import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import { User } from "../../definitions/user"

interface ResetProps {}

export const Reset: React.FC<ResetProps> = ({}) => {
    const hash = useParams().hash
    const [user, setUser] = useState<User>()

    return <Box sx={{}}></Box>
}
