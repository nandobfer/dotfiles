import { Avatar, Box, IconButton, Paper } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useHeader } from "../hooks/useHeader"
import { Header } from "../components/Header"
import profile2 from "../assets/person.jpg"
import { Info } from "../components/Info"
import { Tag } from "../components/Tag"
import StarSharpIcon from "@mui/icons-material/StarSharp"
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { Transactions } from "../components/Transactions"
import { BottomNavigation } from "../components/BottomNavigation"
import { Comment } from "../components/Comment"
import { useNavigate } from "react-router-dom"

interface ProfileProps {
    user: User | null
}

export const Profile: React.FC<ProfileProps> = ({ user }) => {
    const header = useHeader()
    const navigate = useNavigate()
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
                            <Tag name="Produtor" color="#D2FFB6" style={"2vw"} />
                            <Tag name="Corretor" color="#E2EAFF" style={"2vw"} />
                            <Tag name="Transportador" color="#FFFDC7" style={"2vw"} />
                            <Tag name="Loja" color="#F0C7FF" style={"2vw"} />
                        </Box>
                    </Box>
                    <Box sx={{ gap: "5vw" }}>
                        <Info name={user?.sold} title="Vendas" />
                        <Info name={user?.bought} title="Compras" />
                        <Info name={user?.rating} title="Nota" icon={<StarSharpIcon sx={{ width: "3.2vw" }} />} />
                        <Info name={new Date(user?.date || 0).getMonth() + 1} title="Meses" />
                    </Box>
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
