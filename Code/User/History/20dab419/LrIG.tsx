import { Avatar, Box, IconButton, Paper } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useHeader } from "../hooks/useHeader"
import { Header } from "../components/Header"
import profile2 from "../assets/person.jpg"
import { Tag } from "../components/Tag"
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { Transactions } from "../components/Transactions"
import { BottomNavigation } from "../components/BottomNavigation"
import { Comment } from "../components/Comment"
import { useNavigate } from "react-router-dom"
import { UserStats } from "../components/UserStats"
import { useUser } from "../hooks/useUser"

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = ({}) => {
    const header = useHeader()
    const navigate = useNavigate()

    const { user } = useUser()

    const [title, settitle] = useState("Safra de Soja 2022/23 ")
    const [company, setCompany] = useState("Transportadora")
    const [price, setPrice] = useState("125.000,02")
    const [weight, setWeight] = useState(9.1)
    const [date, setDate] = useState("19/05/2023")

    useEffect(() => {
        if (!user) navigate("/login")

        header.setTitle("Perfil")
        header.updateSection("/profile")
        console.log("opa")
    }, [])

    return (
        <Box sx={{ flexDirection: "column", width: "100%", height: "100%", padding: "12vh 0vw 10vh 0vw" }}>
            <Header />
            <Box
                sx={{
                    width: "100%",
                    height: "100%",
                    paddingBottom: "5vw",
                    overflowY: "auto",
                    gap: "1vw",
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
                        padding: "3.2vw",
                        gap: "1vw",
                    }}
                >
                    <p style={{ textAlign: "right", fontSize: "2.5vw", textDecoration: "underline" }}>Editar</p>
                    <Avatar src={profile2} sx={{ width: "22vw", height: "22vw", borderRadius: "50%" }} />
                    <Box sx={{ flexDirection: "column", alignItems: "center", gap: "1.2vw" }}>
                        <p style={{ fontSize: "5.5vw" }}>{user?.name}</p>
                        <Box sx={{ alignItems: "center", gap: "1vw" }}>
                            <FmdGoodOutlinedIcon sx={{ width: "4vw" }} />
                            <p style={{ fontSize: "2.56vw" }}>{"Jaboatão dos Guararapes, Pernambuco"}</p>
                        </Box>
                        <Box sx={{ flexDirection: "row", gap: "1vw" }}>
                            {user?.adm && <Tag name={"ADM"} variant="adm" style={"2vw"} />}
                            {user?.producer && <Tag name={"Produtor"} variant="producer" style={"2vw"} />}
                            {user?.agent && <Tag name={"Corretor"} variant="agent" style={"2vw"} />}
                            {user?.shipping && <Tag name={"Transportadora"} variant="shipping" style={"2vw"} />}
                            {user?.business && <Tag name={"Loja"} variant="ads" style={"2vw"} />}
                        </Box>
                    </Box>
                    <UserStats user={user!} sx={{ gap: "5vw" }} />
                </Box>
                <Box
                    sx={{
                        width: "92%",
                        flexDirection: "column",
                    }}
                >
                    <Box sx={{ alignItems: "center", justifyContent: "space-between" }}>
                        <p style={{ fontSize: "3.5vw" }}>Transações Recentes</p>
                        <Box sx={{ alignItems: "center", gap: "0vw" }} onClick={() => {}}>
                            <p style={{ fontSize: "2.8vw" }}>Ver todas</p>
                            <IconButton sx={{ width: "2vw" }}>
                                <ArrowForwardIosIcon sx={{ width: "2vw" }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box sx={{ width: "100%", flexDirection: "column", gap: "2vw" }}>
                        <Transactions title={title} price={price} weight={weight} company={company} date={date} haveSeller={true} />
                        <Transactions
                            title={"Safra de café"}
                            price={"45.287,23"}
                            weight={5.8}
                            company={company}
                            date={"27/03/2023"}
                            haveSeller={false}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "92%",
                        flexDirection: "column",
                    }}
                >
                    <Box sx={{ alignItems: "center", justifyContent: "space-between" }}>
                        <p style={{ fontSize: "3.5vw" }}>Comentários de Perfil</p>
                        <Box sx={{ alignItems: "center", gap: "0vw" }} onClick={() => {}}>
                            <p style={{ fontSize: "2.8vw" }}>Ver todas</p>
                            <IconButton sx={{ width: "2vw" }}>
                                <ArrowForwardIosIcon sx={{ width: "2vw" }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Paper elevation={3} sx={{ borderRadius: "3vw", flexDirection: "column", height: "max-content" }}>
                        <Comment
                            user={"Hellen Katsi"}
                            comment={"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical."}
                            qtdStars={5}
                            date={"5 de Fevereiro"}
                        />{" "}
                        <Comment
                            user={"Joelson Souza"}
                            comment={
                                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                            }
                            qtdStars={2}
                            date={"19 de Maio"}
                        />{" "}
                        <Comment
                            user={"Abram Culhane"}
                            comment={"Latin words, combined with a handful of model sentence structures."}
                            qtdStars={3}
                            date={"28 de Julho"}
                        />{" "}
                    </Paper>
                </Box>
            </Box>
            <BottomNavigation />
        </Box>
    )
}
