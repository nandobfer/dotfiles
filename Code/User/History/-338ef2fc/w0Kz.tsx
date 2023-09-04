import React from "react"
import { Avatar, Box, Switch, alpha } from "@mui/material"
import { Tag } from "./Tag"
import { useColors } from "../hooks/useColors"
import { useMuiTheme } from "../hooks/useMuiTheme"
import { useUser } from "../hooks/useUser"
import { useIo } from "../hooks/useIo"
import { useNavigate } from "react-router-dom"
import { useImageUrl } from "../hooks/useImageUrl"
import { CustomerAvatar } from "./CustomerAvatar"

interface CustomerContainerProps {
    customer: Customer
}

export const CustomerContainer: React.FC<CustomerContainerProps> = ({ customer }) => {
    const io = useIo()
    const colors = useColors()
    const theme = useMuiTheme()
    const navigate = useNavigate()

    const { isAdmin } = useUser()
    const { getCustomerPic } = useImageUrl()

    const toggleCustomerStatus = (customer: Customer) => {
        io.emit("customer:update", { ...customer, active: !customer.active })
    }

    return (
        <Box
            sx={{
                borderBottom: "2px solid",
                borderRadius: "0.5vw",
                padding: "1vw",
                width: "30vw",
                // bgcolor: customer.active ? "background.default" : alpha(theme.palette.error.main, 0.25),
                color: customer.active ? "primary.main" : "error.main",
                gap: "1vw",
                position: "relative",
                // minHeight: "12vw",
            }}
        >
            <Switch
                color={"success"}
                checked={customer.active}
                onChange={() => toggleCustomerStatus(customer)}
                sx={{ position: "absolute", right: "0.5vw", top: "0.5vw", pointerEvents: isAdmin() ? "" : "none" }}
            />

            <Box sx={{ flexDirection: "column", gap: "0.5vw", height: "20vw" }}>
                <Box sx={{ gap: "1vw", alignItems: "center" }}>
                    <CustomerAvatar customer={customer} sx={{ width: "5vw", height: "5vw" }} />
                    <Box
                        sx={{
                            fontWeight: "bold",
                            fontSize: "1vw",
                            width: "20vw",
                            cursor: "pointer",
                            "&:hover": { textDecoration: "underline" },
                        }}
                        onClick={() => {
                            navigate(`/customers/${customer.id}`)
                        }}
                    >
                        {customer.name}
                    </Box>
                </Box>
                <Box sx={{ alignItems: "center", gap: "0.5vw", width: "20vw", flexWrap: "wrap", height: "5vw" }}>
                    {customer.services.map((service) => (
                        <Tag
                            key={service.id}
                            name={service.tag}
                            tooltip={service.name}
                            sx={{ fontSize: "0.7vw", padding: "0.25vw 0.5vw" }}
                            color={customer.active ? "" : theme.palette.error.main}
                        />
                    ))}
                </Box>
                <p style={{ color: colors.text.secondary, fontSize: "0.75vw", width: "20vw" }}>{customer.recomendations}</p>
            </Box>
        </Box>
    )
}
