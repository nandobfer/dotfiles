import React, { useState, useEffect } from "react"
import { Box, Paper, alpha, SxProps, Button, CircularProgress, IconButton } from "@mui/material"
import { useColors } from "../../../hooks/useColors"
import { Form, Formik } from "formik"
import { CustomerForm } from "./CustomerForm"
import { useNavigate, useParams } from "react-router-dom"
import { Card } from "./Card"
import { NewButton } from "../../../components/NewButton"
import ModeEditIcon from "@mui/icons-material/ModeEdit"
import { Container, Data } from "../../Profile/UserComponents"
import BusinessIcon from "@mui/icons-material/Business"
import NotesIcon from "@mui/icons-material/Notes"
import { useCustomers } from "../../../hooks/useCustomers"
import { useApi } from "../../../hooks/useApi"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import { Tag } from "../../../components/Tag"
import { useMuiTheme } from "../../../hooks/useMuiTheme"
import { useIo } from "../../../hooks/useIo"
import { useUser } from "../../../hooks/useUser"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"

interface ProfileProps {
    admin?: boolean
    createOnly?: boolean
}

export const Profile: React.FC<ProfileProps> = ({ admin, createOnly }) => {
    const api = useApi()
    const colors = useColors()
    const navigate = useNavigate()
    const id = useParams().id
    const theme = useMuiTheme()
    const io = useIo()

    const { customers: list } = useCustomers()
    const { isAdmin } = useUser()

    const [customer, setCustomer] = useState(createOnly ? undefined : id ? list.find((item) => item.id == Number(id)) : undefined)
    const [isEditing, setIsEditing] = useState(createOnly)
    const [selectedServices, setSelectedServices] = useState<Service[]>(customer?.services || [])
    const [loading, setLoading] = useState(false)
    const [deleting, setDeleting] = useState(false);
    
    const [image, setImage] = useState<File>()

    const [initialValues, setInitialValues] = useState<CustomerForm>({
        ...(customer || {
            name: "",
            recomendations: "",
        }),
    })

    const shouldEdit = isAdmin() || admin

    const wrapperStyle: SxProps = {
        flexDirection: "row",
        gap: "5vw",
        padding: "3vw",
        backgroundColor: "background.default",
        boxShadow: `0px 2px 35px ${alpha(colors.text.secondary, 0.3)}`,
        borderRadius: "0.5vw",
        alignSelf: "center",
        alignItems: "center",
        width: "80%",
        height: "max-content",
    }

    const handleDelete = () => {
        if (deleting) return
        if (!customer) return

        confirm({
            title: "atenção",
            content: `tem certeza que deseja deletar a conta de ${customer.name}? essa ação é irreversível`,
            onConfirm: () => remove(customer, setDeleting),
        })
    }

    const handleSubmit = (values: CustomerForm) => {
        if (loading) return

        setLoading(true)

        const data = {
            ...values,
            services: selectedServices,
        }

        if (createOnly) {
            api.customer.new({
                data,
                callback: (response: { data: Customer }) => {
                    const customer = response.data
                    if (customer) navigate("/admin/customers")
                },
                finallyCallback: () => setLoading(false),
            })
        } else {
            io.emit("customer:update", data)
        }
    }

    useEffect(() => {
        io.on("customer:update:success", (data: Customer) => {
            setLoading(false)
            setIsEditing(false)
            setCustomer(data)
            setInitialValues(data)
        })

        return () => {
            io.off("customer:update:success")
        }
    }, [])

    return (
        <Box
            sx={{
                padding: "0vw 0vw",
                flexDirection: "column",
                width: "100%",
            }}
        >
            <Paper
                elevation={0}
                sx={{
                    borderRadius: "0.3vw 3vw 0",
                    backgroundColor: "background.paper",
                    width: "100%",
                    flexDirection: "column",
                    height: "28vw",
                    maxHeight: "50vw",
                    gap: "1vw",
                    paddingTop: "10vw",
                }}
            >
                <IconButton sx={{ position: "absolute", top: "7.8vw", left: "2.4vw" }} color="secondary" onClick={() => navigate("/admin/customers")}>
                    <ArrowBackIosNewIcon />
                </IconButton>
                <Box sx={wrapperStyle}>
                    {isEditing ? (
                        <>
                            <Formik initialValues={initialValues} enableReinitialize onSubmit={handleSubmit}>
                                {({ values, handleChange }) => (
                                    <Form>
                                        <Card image={image} setImage={setImage} editing />
                                        <Box sx={{ flexDirection: "column", width: "62%", gap: "4.9vw" }}>
                                            <CustomerForm
                                                values={values}
                                                handleChange={handleChange}
                                                selectedServices={selectedServices}
                                                setSelectedServices={setSelectedServices}
                                                createOnly={createOnly}
                                            />
                                            <Box sx={{ gap: "1vw", justifyContent: "flex-end" }}>
                                                <Button
                                                    variant="outlined"
                                                    onClick={() => (createOnly ? navigate("/admin/customers") : setIsEditing(false))}
                                                >
                                                    cancelar
                                                </Button>
                                                <Button type="submit" variant="contained" sx={{ color: "secondary.main" }}>
                                                    {loading ? <CircularProgress size="1.5rem" color="secondary" /> : "enviar"}
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Form>
                                )}
                            </Formik>
                        </>
                    ) : (
                        <>
                            {shouldEdit && (
                                <>
                                    <NewButton
                                        onClick={() => setIsEditing(true)}
                                        bottom={"6.8vw"}
                                        right={"17.5vw"}
                                        color="error"
                                        icon={<DeleteForeverIcon sx={{ width: "100%", height: "100%", color: colors.secondary }} />}
                                    />
                                    <NewButton
                                        onClick={() => setIsEditing(true)}
                                        bottom={"6.8vw"}
                                        right={"12.5vw"}
                                        icon={<ModeEditIcon sx={{ width: "100%", height: "100%", color: colors.secondary }} />}
                                    />
                                </>
                            )}
                            <Card image={image} setImage={setImage} />
                            <Box sx={{ flexDirection: "column", width: "62%", gap: "2vw", alignSelf: "start" }}>
                                <h1>{customer?.name}</h1>
                                <Box sx={{ flexDirection: "column", width: "62%", gap: "vw" }}>
                                    <Container name="Informações da Empresa" children />
                                    <Box sx={{ flexDirection: "column", gap: "2vw" }}>
                                        <Box sx={{ flexDirection: "column", gap: "0.5vw" }}>
                                            <Data title="Nome Fantasia" value={customer?.name} icon={<BusinessIcon />} />
                                            <Data title="Recomendações" value={customer?.recomendations} icon={<NotesIcon />} />
                                        </Box>
                                        <Box sx={{ flexDirection: "row", gap: "0.5vw" }}>
                                            {customer?.services.map((service) => (
                                                <Tag
                                                    key={service.id}
                                                    name={service.tag}
                                                    sx={{ fontSize: "0.7vw", padding: "0.25vw 0.5vw" }}
                                                    color={customer.active ? "" : theme.palette.error.main}
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </>
                    )}
                </Box>
            </Paper>
        </Box>
    )
}
