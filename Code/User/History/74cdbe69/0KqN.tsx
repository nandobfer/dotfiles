import React from "react"
import { Box } from "@mui/material"

interface CustomersProps {
    user: User
}

export const Customers: React.FC<CustomersProps> = ({ user }) => {
    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100%",
                height: "100%",
                bgcolor: "background.default",
                padding: "2vw",
            }}
        >
            oi
        </Box>
    )
}
