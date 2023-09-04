import React from "react"
import { Box } from "@mui/material"
import { RoleContainer, RoleSkeletons } from "./RoleContainer"
import { useDepartments } from "../../../hooks/useDepartments"

interface UserListProps {
    list: User[]
}

export const UserList: React.FC<UserListProps> = ({ list }) => {
    const { departments, loading } = useDepartments()

    return loading ? (
        <RoleSkeletons />
    ) : (
        <Box
            sx={{
                flexDirection: "row",
                // flexWrap: "wrap",
                // height: "75vh",
                width: "100%",
                overflowX: "auto",
            }}
        >
            {departments
                .filter((department) => !!list.filter((user) => user.department.id == department.id).length)
                .map((department) => (
                    <RoleContainer key={department.id} department={department} users={list} />
                ))}
        </Box>
    )
}
