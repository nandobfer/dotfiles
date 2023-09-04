import { Avatar, Box, IconButton, Paper } from "@mui/material"
import React, { useEffect } from "react"
import { useHeader } from "../hooks/useHeader"
import { Header } from "../components/Header"
import profile2 from "../assets/person.jpg"
import { Info } from "../components/Info"
import { Tag } from "../components/Tag"
import StarSharpIcon from "@mui/icons-material/StarSharp"
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"

interface ProfileProps {
    user: User | null
}

export const Profile: React.FC<ProfileProps> = ({ user }) => {
    const header = useHeader()

    useEffect(() => {
        header.setTitle("Perfil")
        console.log("opa")
    }, [])

    return (
        <Box sx={{ flexDirection: "column", width: "100%" }}>
            <Header />
            <Box sx={{ width: "100%", padding: "6vw", gap: "3vw", flexDirection: "column", alignItems: "center" }}>
                <Box
                    sx={{
                        backgroundColor: "white",
                        width: "92%",
                        height: "max-content",
                        borderRadius: "2vw",
                        flexDirection: "Column",
                        alignItems: "center",
                        padding: "5vw",
                        gap: "4vw",
                    }}
                >
                    <Avatar src={profile2} sx={{ width: "25vw", height: "25vw", borderRadius: "50%" }} />
                    <Box sx={{ flexDirection: "column", alignItems: "center", gap: "1.2vw" }}>
                        <p style={{ fontSize: "6vw" }}>{user?.name}</p>
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
                        gap: "2vw",
                    }}
                >
                    <Box sx={{ gap: "1vw", alignItems: "center", justifyContent: "space-between" }}>
                        <p style={{ fontSize: "3.5vw" }}>Transações Recentes</p>
                        <Box sx={{ alignItems: "center", gap: "0vw" }} onClick={() => {}}>
                            <p style={{ fontSize: "2.8vw" }}>Ver todas</p>
                            <IconButton sx={{ width: "2vw" }}>
                                <ArrowForwardIosIcon sx={{ width: "2vw" }} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Paper
                        elevation={3}
                        sx={{
                            backgroundColor: "white",
                            width: "100%",
                            height: "max-content",
                            borderRadius: "2vw",
                            alignItems: "center",
                            padding: "5vw",
                        }}
                    >
                        <Box sx={{ display: "flex", gap: "4vw", alignItems: "flex-end", justifyContent: "space-between" }}>
                            <Box sx={{ flexDirection: "column" }}>
                                <p style={{ fontSize: "2.6vw" }}>
                                    Safra de Soja 2022/23 | <span style={{ fontSize: "2.2vw" }}>9,15 toneladas</span>
                                </p>
                                <p style={{ fontSize: "2.2vw" }}>[Transportadora]</p>
                            </Box>
                            <Box sx={{ flexDirection: "column" }}>
                                <p style={{ fontSize: "2.6vw" }}>R$ 134.024,02</p>
                                <p style={{ fontSize: "2.2vw" }}>[18/07/2023]</p>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </Box>
    )
}
