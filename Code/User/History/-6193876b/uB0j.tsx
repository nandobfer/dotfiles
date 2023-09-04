import React from "react"
import { Box } from "@mui/material"
import { RoleContainer, RoleSkeletons } from "./RoleContainer"
import { useDepartments } from "../../../hooks/useDepartments"
import { useUser } from "../../../hooks/useUser"

interface UserListProps {
    list: User[]
}

export const UserList: React.FC<UserListProps> = ({ list }) => {
    const { departments, loading } = useDepartments()
    const { list } = useUser()

    return loading ? (
        <RoleSkeletons />
    ) : (
        <>
            {departments
                .filter((department) => !!list.filter((user) => user.department.id == department.id).length)
                .map((department) => (
                    <RoleContainer key={department.id} department={department} users={list} />
                ))}
        </>
    )
}
