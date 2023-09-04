import Button from '@mui/material/Button';
import React, { useState } from 'react';
import './style.scss';
import TextField from '@mui/material/TextField';
import { Form, Formik, useFormikContext, withFormik } from 'formik';
import { useApi } from '../../hooks/useApi';
import { useSettings } from "../../hooks/useSettings"
import CircularProgress from '@mui/material/CircularProgress';
import { useSnackbar } from "burgos-snackbar"
import { Box, SxProps } from "@mui/material"

interface RateProps {}

interface FormValues {
    green: number
    yellow: number
    red: number
    red2: number
}

export const Rate: React.FC<RateProps> = ({}) => {
    const api = useApi()
    const settings = useSettings()

    const initialValues: FormValues = settings.rates

    const { snackbar } = useSnackbar()
    const [infoLoading, setInfoLoading] = useState(false)

    const loading_props = {
        size: "1.5rem",
        sx: { color: "white" },
    }

    const inputStyle: SxProps = {
        width: "48%",
    }

    const saveRate = (values: FormValues) => {
        setInfoLoading(true)

        api.settings.rate({
            data: values,
            callback: (response: { data: Settings }) => {
                settings.setSettings(response.data)
                snackbar({
                    severity: "success",
                    text: "Tarifa atualizada",
                })
            },
            finallyCallback: () => setInfoLoading(false),
        })
    }

    return (
        <div className="Rate-Component">
            <Formik initialValues={initialValues} onSubmit={saveRate} enableReinitialize>
                {({ values, handleChange }) => (
                    <Form>
                        <p className="title">Tarifa de Energia</p>
                        <Box sx={{ flexWrap: "wrap", width: "100%", gap: "1vw" }}>
                            <TextField
                                label=""
                                placeholder="Tarifa de energia em %"
                                name="green"
                                value={values.green}
                                onChange={handleChange}
                                sx={inputStyle}
                            />
                            <TextField
                                label=""
                                placeholder="Tarifa de energia em %"
                                name="yellow"
                                value={values.yellow}
                                onChange={handleChange}
                                sx={inputStyle}
                            />
                            <TextField
                                label=""
                                placeholder="Tarifa de energia em %"
                                name="red"
                                value={values.red}
                                onChange={handleChange}
                                sx={inputStyle}
                            />
                            <TextField
                                label=""
                                placeholder="Tarifa de energia em %"
                                name="red2"
                                value={values.red2}
                                onChange={handleChange}
                                sx={inputStyle}
                            />
                        </Box>
                        <Button type="submit" variant="contained">
                            {" "}
                            {infoLoading ? <CircularProgress {...loading_props} /> : "Salvar"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}