import React from "react"
import { Box } from "@mui/material"
import { RoleContainer } from "./RoleContainer"
import { NewButton } from "../../../components/NewButton"

interface UsersProps {}

export const Users: React.FC<UsersProps> = ({}) => {
    return (
        <Box sx={{ flexDirection: "column", padding: "2vw", width: "100%" }}>
            <NewButton />
            <RoleContainer />
        </Box>
    )
}
