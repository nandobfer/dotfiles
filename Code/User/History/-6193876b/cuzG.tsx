import React from "react"
import { Box } from "@mui/material"

interface UserListProps {}

export const UserList: React.FC<UserListProps> = ({}) => {
    return departments.map((department) => <RoleContainer key={department.id} department={department} users={userList} />
}
