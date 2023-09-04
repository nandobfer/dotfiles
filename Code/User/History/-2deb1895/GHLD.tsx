import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import { User } from "../../definitions/user"
import { useApi } from "../../hooks/useApi"
import { useColors } from "../../hooks/useColors"

interface ResetProps {}

export const Reset: React.FC<ResetProps> = ({}) => {
    const hash = useParams().hash
    const api = useApi()
    const colors = useColors()

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User>()

    useEffect(() => {
        api.user.hash({
            data: { hash },
            callback: (response: { data: User }) => {
                const user = response.data
                console.log(user)
                if (user) {
                    setUser(user)
                }
            },
            finallyCallback: () => setLoading(false),
        })
    }, [])

    return (
        <Box sx={{ flexDirection: "column", backgroundColor: colors.purple, width: "100%", padding: "10vw", color: "white", gap: "5vw" }}>
            <h3>Resetar senha</h3>
        </Box>
    )
}
