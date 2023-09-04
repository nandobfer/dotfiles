import React, { useState } from "react"
import { Box, CircularProgress, IconButton, Paper, TextField, darken, lighten } from "@mui/material"
import { backgroundStyle } from "../../../style/background"
import { Roles } from "./Roles"
import { useDepartments } from "../../../hooks/useDepartments"
import { useUser } from "../../../hooks/useUser"
import { useColors } from "../../../hooks/useColors"
import { useDarkMode } from "../../../hooks/useDarkMode"
import { Form, Formik } from "formik"
import { textFieldStyle } from "../../../style/textfield"
import AddIcon from "@mui/icons-material/Add"
import { useApi } from "../../../hooks/useApi"

interface DeparmentsProps {
    user: User
}

export const Deparments: React.FC<DeparmentsProps> = ({ user }) => {
    const colors = useColors()
    const api = useApi()

    const { departments } = useDepartments()
    const { list } = useUser()
    const { darkMode } = useDarkMode()

    const [loading, setLoading] = useState(false)

    const handleNewDepartment = (values: { name: string }) => {}

    return (
        <Box sx={{ ...backgroundStyle, padding: "2vw", gap: "2vw" }}>
            <Roles />

            <Paper sx={{ gap: "1vw", bgcolor: "background.default", padding: "1vw", flexDirection: "column" }}>
                Departamentos
                <Box sx={{ gap: "1vw", alignItems: "center" }}>
                    {departments.map((department) => {
                        const users = list.filter((user) => user.department.id == department.id)
                        return (
                            <Box
                                key={department.id}
                                sx={{
                                    width: "20vw",
                                    borderRadius: "1vw",
                                    borderBottom: "2px solid",
                                    padding: "1vw",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                {department.name}
                                <Box
                                    sx={{
                                        padding: "0.5vw",
                                        borderRadius: "50%",
                                        fontSize: "0.7vw",
                                        minWidth: "1.5vw",
                                        height: "1.5vw",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "secondary.main",
                                        bgcolor: darkMode ? darken(colors.primary, 0.5) : lighten(colors.primary, 0.4),
                                    }}
                                >
                                    {users.length}
                                </Box>
                            </Box>
                        )
                    })}
                    <Formik initialValues={{ name: "" }} onSubmit={handleNewDepartment}>
                        {({ values, handleChange }) => (
                            <Form>
                                <TextField
                                    label="novo departamento"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    sx={{ ...textFieldStyle, width: "20vw" }}
                                    InputProps={{
                                        endAdornment: (
                                            <IconButton color={"primary"} type="submit">
                                                {loading ? <CircularProgress size="1.5rem" color="secondary" /> : <AddIcon />}
                                            </IconButton>
                                        ),
                                    }}
                                />
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Paper>
        </Box>
    )
}
