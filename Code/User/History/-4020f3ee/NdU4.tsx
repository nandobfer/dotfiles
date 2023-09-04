import React from "react"
import { Avatar, Box, Paper } from "@mui/material"
import { CurrencyText } from "./CurrencyText"
import { Tag } from "./Tag"

interface ResourceCardProps {
    variant?: "default" | "square"
    type: SubaccountType[]
    resource: Subaccount
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ variant = "default", type, resource }) => {
    const title = {
        producer: "Produtor",
        agent: "Corretor",
        shipping: "Transportador",
        business: "Negócios",
        store: "Loja",
        service: "Serviço",
        adm: "Administrador",
    }

    return variant == "default" ? (
        <Paper elevation={0} sx={{ alignItems: "center", background: "white", padding: "2vw 3vw", borderRadius: "5vw", gap: "3vw" }}>
            <Avatar src={resource.image} sx={{ width: "15vw", height: "15vw" }} />
            <Box sx={{ flexDirection: "column", width: "65vw", gap: "1vw" }}>
                <Box sx={{ justifyContent: "space-between", width: "100%" }}>
                    <p style={{ fontSize: "4vw" }}>{resource.name}</p>
                    <Box sx={{ gap: "1vw" }}>
                        {type
                            .filter((item) => !!item)
                            .map((item) => (
                                <Tag key={item} variant={item} name={title[item]} style={"2.8vw"} />
                            ))}
                    </Box>
                </Box>

                <Box sx={{ fontSize: "2.6vw", justifyContent: "space-between" }}>
                    <p>{resource.rating}</p>
                    <p>Vendas: {resource.user.sold}</p>
                    <p>Compras: {resource.user.bought}</p>
                    <p>{new Date(resource.date).getMonth() + 1} meses</p>
                </Box>
            </Box>
        </Paper>
    ) : (
        <Paper elevation={0} sx={{ flexDirection: "column", background: "transparent", gap: "1vw" }}>
            <Avatar src={resource.image} variant="rounded" sx={{ width: "20vw", height: "20vw" }} />
            <p style={{ fontSize: "3.2vw", fontWeight: "bold" }}>{resource.name}</p>
            {/* <CurrencyText value={resource.price} style={{ fontSize: "2.8vw" }} /> */}
        </Paper>
    )
}
