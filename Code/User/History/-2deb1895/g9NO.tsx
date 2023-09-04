import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { useParams } from "react-router-dom"
import { User } from "../../definitions/user"
import { useApi } from "../../hooks/useApi"
import { useColors } from "../../hooks/useColors"
import { Form, Formik } from "formik"
import { TextField } from "../../components/TextField"

interface ResetProps {}

interface FormValues {
    password: string
    newPassword: string
}

export const Reset: React.FC<ResetProps> = ({}) => {
    const hash = useParams().hash
    const api = useApi()
    const colors = useColors()

    const [userLoading, setUserLoading] = useState(true)

    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<User>()

    const initialValues: FormValues = {
        password: "",
        newPassword: "",
    }

    const handleSubmit = (values: FormValues) => {
        if (loading) return
    }

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
            finallyCallback: () => setUserLoading(false),
        })
    }, [])

    return (
        <Box sx={{ flexDirection: "column", backgroundColor: colors.purple, width: "100%", padding: "10vw", color: "white", gap: "5vw" }}>
            <h3 style={{ alignSelf: "center" }}>Resetar senha</h3>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form style={{ display: "contents" }}>
                        <TextField name="password" value={values.password} onChange={handleChange} required />
                        <TextField />
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
