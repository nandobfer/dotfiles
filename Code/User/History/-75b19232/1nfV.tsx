import React, { useState, useEffect, useRef } from "react"
import { ListTitle } from "./ListTitle"
import { Transactions } from "./Transactions"
import { UserStats } from "./UserStats"
import { Box, Paper, Avatar, CircularProgress } from "@mui/material"
import { Comment } from "./Comment"
import { Tag } from "./Tag"
import EditIcon from "@mui/icons-material/Edit"
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined"
import { EditProfile } from "./EditProfile"
import { useUser } from "../hooks/useUser"
import { useDataHandler } from "../hooks/useDataHandler"
import { FormikProps } from "formik"
import { useEstadosBrasil } from "../hooks/useEstadosBrasil"

interface ContentProfileProps {
    user: User | null
    editingMode: boolean
}

export const ContentProfile: React.FC<ContentProfileProps> = ({ user, editingMode }) => {
    const formRef = useRef<FormikProps<UpdateUserValues>>(null)

    const { isEditing, setEditing, updateLoading } = useUser()
    const { unmask } = useDataHandler()
    const { update } = useUser()
    const estados = useEstadosBrasil()

    const [title, settitle] = useState("Safra de Soja 2022/23 ")
    const [company, setCompany] = useState("Transportadora")
    const [price, setPrice] = useState("125.000,02")
    const [weight, setWeight] = useState(9.1)
    const [date, setDate] = useState("19/05/2023")

    const handleEditing = () => {
        if (isEditing) {
            console.log(formRef)
            formRef.current?.submitForm()
        } else {
            setEditing(true)
        }
    }

    const handleUpdateSubmit = (values: UpdateUserValues, file?: File) => {
        const data = {
            ...values,
            cpf: unmask(values.cpf),
            phone: unmask(values.phone),
            cep: unmask(values.cep),
            id: user!.id,
            file: file,
            uf: estados.find((estado) => estado.id == Number(values.uf))!.value,
        }

        update(data)
    }

    useEffect(() => {
        setEditing(editingMode)
    }, [])

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                paddingBottom: "5vw",
                overflowY: "auto",
                gap: "3vw",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "white",
                    width: "92%",
                    height: "max-content",
                    borderRadius: "2vw",
                    flexDirection: "Column",
                    alignItems: "center",
                    padding: "3vw",
                    gap: "2vw",
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        alignItems: "center",
                        width: "15vw",
                        height: "6vw",
                        justifyContent: "center",
                        borderRadius: "5vw",
                        backgroundColor: isEditing ? "#8FFFA1" : "white",
                        gap: "0.5vw",
                        alignSelf: "self-end",
                        // position: isEditing ? "fixed" : "",
                        position: "absolute",
                        zIndex: 2,
                    }}
                    onClick={handleEditing}
                >
                    <p
                        style={{
                            textAlign: "right",
                            fontSize: "2.7vw",
                            textDecoration: "underline",
                            color: "black",
                        }}
                    >
                        {isEditing ? "Salvar" : "Editar"}
                    </p>
                    {updateLoading ? (
                        <CircularProgress sx={{ marginLeft: "0.5vw" }} size="3vw" color="primary" />
                    ) : (
                        <EditIcon sx={{ marginLeft: "0.5vw", width: "3vw" }} />
                    )}
                </Box>
                {!isEditing ? (
                    <Box sx={{ flexDirection: "column", alignItems: "center", gap: "1vw" }}>
                        <Avatar src={user?.image} sx={{ width: "25vw", height: "25vw", borderRadius: "50%" }} />
                        <p style={{ fontSize: "2.7vw", color: "gray" }}>@{user?.username}</p>
                        <p style={{ fontSize: "5.5vw" }}>{user?.name}</p>
                        <Box sx={{ alignItems: "center", gap: "1vw" }}>
                            <FmdGoodOutlinedIcon sx={{ height: "4vw", width: "4vw" }} />
                            <p style={{ fontSize: "2.56vw" }}>
                                {user?.city}, {user?.uf}
                            </p>
                        </Box>
                    </Box>
                ) : (
                    <EditProfile user={user} handleSubmit={handleUpdateSubmit} formRef={formRef} />
                )}

                <Box sx={{ flexDirection: "row", gap: "1vw" }}>
                    {user?.adm && <Tag name={"ADM"} variant="adm" style={"2vw"} />}
                    {user?.producer && <Tag name={"Produtor"} variant="producer" style={"2vw"} />}
                    {user?.agent && <Tag name={"Corretor"} variant="agent" style={"2vw"} />}
                    {user?.shipping && <Tag name={"Transportadora"} variant="shipping" style={"2vw"} />}
                    {user?.business && <Tag name={"Loja"} variant="business" style={"2vw"} />}
                </Box>

                <UserStats user={user!} sx={{ gap: "5vw" }} />
            </Box>
            <Box
                sx={{
                    width: "92%",
                    flexDirection: "column",
                }}
            >
                <ListTitle title="Transações Recentes" location="transactions" />
                <Box sx={{ width: "100%", flexDirection: "column", gap: "2vw" }}>
                    <Transactions title={title} price={price} weight={weight} company={company} date={date} haveSeller={true} />
                    <Transactions title={"Safra de café"} price={"45.287,23"} weight={5.8} company={company} date={"27/03/2023"} haveSeller={false} />
                </Box>
            </Box>
            <Box
                sx={{
                    width: "92%",
                    flexDirection: "column",
                }}
            >
                <ListTitle title="Comentários de Perfil" location="comments" />
                <Paper elevation={3} sx={{ borderRadius: "3vw", flexDirection: "column", height: "max-content" }}>
                    <Comment
                        user={"Hellen Katsi"}
                        comment={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical."}
                        qtdStars={5}
                        date={"5 de Fevereiro"}
                    />{" "}
                </Paper>
            </Box>
        </Box>
    )
}
