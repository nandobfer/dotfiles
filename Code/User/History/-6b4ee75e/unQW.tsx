import React, { useEffect, useRef, useState } from "react"
import { Box, Button, CircularProgress, MenuItem, Paper, TextField } from "@mui/material"
import { QrCodeModal } from "../../components/QrcodeModal"
import { Form, Formik } from "formik"
import { saveAs } from "file-saver"
import SaveIcon from "@mui/icons-material/Save"
import { FileDownload } from "@mui/icons-material"
import { useSnackbar } from "burgos-snackbar"
import { useCustomers } from "../../hooks/useCustomers"
import { textFieldStyle } from "../../style/textfield"
import { selectMenuStyle } from "../../style/selectMenuStyle"
import { useIo } from "../../hooks/useIo"

interface QrCodeGeneratorProps {
    user: User
}

export const QrCodeGenerator: React.FC<QrCodeGeneratorProps> = ({ user }) => {
    const ref = useRef<HTMLCanvasElement>(null)
    const io = useIo()

    const { customers } = useCustomers()
    const { snackbar } = useSnackbar()
    const savedCodes = customers.map((customer) => customer.qrcodes).flat()

    const [loading, setLoading] = useState(false)

    const downloadImage = (values: QrCodeForm) => {
        if (!values.name) {
            snackbar({ severity: "error", text: "quer baixar sem nome?" })
            return
        }

        if (!values.code) {
            snackbar({ severity: "error", text: "cadê o código? quer baixar nada?" })
            return
        }

        const filename = `${values.name}${values.customerId ? ` - ${customers.find((item) => item.id == values.customerId)?.name.trim()}` : ""}`

        const canvas = ref.current?.querySelector("canvas")
        canvas?.toBlob((blob: Blob | null) => {
            if (blob) saveAs(blob, `${filename}.png`)
        })
    }
    const handleSubmit = (values: QrCodeForm) => {
        if (loading) return
        if (!values.name) {
            snackbar({ severity: "error", text: "quer salvar sem nome?" })
            return
        }

        if (!values.code) {
            snackbar({ severity: "error", text: "cadê o código? quer salvar nada?" })
            return
        }

        if (!values.customerId) {
            snackbar({ severity: "error", text: "qual cliente?" })
            return
        }

        setLoading(true)
        const data = { ...values, customer: customers.find((item) => item.id == values.customerId), user }
        io.emit("qrcode:new", data)
    }

    useEffect(() => {
        io.on("qrcode:new:success", () => {
            setLoading(false)
        })

        return () => {
            io.off("qrcode:new:success")
        }
    }, [])

    return (
        <Paper
            sx={{
                bgcolor: "background.default",
                flexDirection: "column",
                gap: "1vw",
                padding: "1vw",
                borderBottom: "2px solid",
                borderRadius: "0.5vw",
                fontWeight: "bold",
            }}
        >
            qr code
            <Formik initialValues={{ name: "", code: "", customerId: 0 }} onSubmit={handleSubmit}>
                {({ values, handleChange }) => (
                    <Form>
                        <Box sx={{ gap: "1vw" }}>
                            <Box sx={{ flexDirection: "column", gap: "1vw", width: "30vw" }}>
                                {customers.length && (
                                    <TextField
                                        label="carregar código salvo"
                                        value={0}
                                        onChange={() => {}}
                                        select
                                        sx={textFieldStyle}
                                        SelectProps={{
                                            MenuProps: {
                                                sx: selectMenuStyle,
                                            },
                                        }}
                                        required
                                    >
                                        <MenuItem value={0} sx={{ display: "none" }}></MenuItem>
                                        {savedCodes.map((qrcode) => (
                                            <MenuItem key={qrcode.id} value={qrcode.id}>
                                                {qrcode.name} - {qrcode.customer.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                )}
                                <TextField label="nome" name="name" value={values.name} onChange={handleChange} sx={textFieldStyle} required />
                                <TextField
                                    label="código"
                                    name="code"
                                    value={values.code}
                                    onChange={handleChange}
                                    sx={textFieldStyle}
                                    required
                                    autoComplete="off"
                                />
                                <TextField
                                    label="cliente"
                                    name="customerId"
                                    value={values.customerId}
                                    onChange={handleChange}
                                    select
                                    sx={textFieldStyle}
                                    SelectProps={{
                                        MenuProps: {
                                            sx: selectMenuStyle,
                                        },
                                    }}
                                    required
                                >
                                    <MenuItem value={0} sx={{ display: "none" }}></MenuItem>
                                    {customers.map((customer) => (
                                        <MenuItem key={customer.id} value={customer.id}>
                                            {customer.name}
                                        </MenuItem>
                                    ))}
                                </TextField>

                                <Box sx={{ gap: "1vw", marginTop: "auto" }}>
                                    <Button variant="outlined" fullWidth onClick={() => downloadImage(values)}>
                                        <FileDownload color="primary" />
                                    </Button>
                                    <Button variant="outlined" fullWidth type="submit">
                                        {loading ? <CircularProgress size="1.5rem" color="primary" /> : <SaveIcon color="primary" />}
                                    </Button>
                                </Box>
                            </Box>
                            <QrCodeModal value={values.code} ref={ref} />
                        </Box>
                    </Form>
                )}
            </Formik>
        </Paper>
    )
}
