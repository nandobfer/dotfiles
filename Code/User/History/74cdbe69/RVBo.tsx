import React from "react"
import { Box } from "@mui/material"
import { Services } from "./Services"
import { NewButton } from "../../../components/NewButton"

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
            <NewButton onClick={handleNewUserClick} bottom={"2vw"} right={"2vw"} icon={<AddIcon sx={{ width: "100%", height: "100%" }} />} />
            <Services />
        </Box>
    )
}
