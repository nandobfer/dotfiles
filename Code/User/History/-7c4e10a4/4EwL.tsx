import React from "react"
import { Box } from "@mui/material"
import { RoleContainer } from "./RoleContainer"
import { NewButton } from "../../../components/NewButton"
import { useDepartments } from "../../../hooks/useDepartments"
import { Route, Routes } from "react-router-dom"
import { NewUser } from "./NewUser"

interface UsersProps {
    user: User
}

export const Users: React.FC<UsersProps> = ({ user }) => {
    const { departments } = useDepartments()

    const handleNewUserClick = () => {}

    return (
        <Routes>
            <Route
                index
                element={
                    <Box sx={{ padding: "2vw", width: "100%", gap: "1vw" }}>
                        <NewButton onClick={handleNewUserClick} bottom={"2vw"} right={"2vw"} />
                        {departments.map((department) => (
                            <RoleContainer key={department.id} department={department} />
                        ))}
                    </Box>
                }
            />
            <Route path="/new" element={<NewUser user={user} />} />
        </Routes>
    )
}
