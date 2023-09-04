import React from "react"
import { Box } from "@mui/material"

interface UserListProps {}

export const UserList: React.FC<UserListProps> = ({ }) => {
    const { departments, loading } = useDepartments()
    
    return loading ? <RoleSkeletons /> : <>{ departments.map((department) => <RoleContainer key={department.id} department={department} users={userList} /> }</>
}
