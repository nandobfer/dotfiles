import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import { User } from "../../definitions/user"
import { useApi } from "../../hooks/useApi"

interface ResetProps {}

export const Reset: React.FC<ResetProps> = ({}) => {
    const hash = useParams().hash
    const api = useApi()

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User>()

    useEffect(() => {
        api.user.hash({
            data: { hash },
            callback: (response: { data: User }) => {
                const user = response.data
                if (user) {
                    setUser(user)
                }
            },
            finallyCallback: () => setLoading(false),
        })
    }, [])

    return <Box sx={{}}></Box>
}
