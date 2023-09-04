import React, { useRef } from "react"
import { Box } from "@mui/material"
import { RoleContainer, RoleSkeletons } from "./RoleContainer"
import { useDepartments } from "../../../hooks/useDepartments"
import { useUser } from "../../../hooks/useUser"

interface UserListProps {
    list: User[]
}

export const UserList: React.FC<UserListProps> = ({ list }) => {
    const ref = useRef() // We will use React useRef hook to reference the wrapping div:
    const { events } = useDraggable(ref) // Now we pass the reference to the useDraggable hook:

    const { departments, loading } = useDepartments()
    const { connectedList } = useUser()

    return loading ? (
        <RoleSkeletons />
    ) : (
        <Box
            sx={{
                flexDirection: "row",
                // flexWrap: "wrap",
                height: "100%",
                width: "100%",
                overflowX: "auto",
                "::-webkit-scrollbar-thumb": {
                    bgcolor: "primary.main",
                    borderRadius: "1vw",
                },
            }}
        >
            {departments
                .filter((department) => !!list.filter((user) => user.department.id == department.id).length)
                .sort(
                    (a, b) =>
                        connectedList.filter((user) => user.department.id == b.id).length -
                        connectedList.filter((user) => user.department.id == a.id).length
                )
                .map((department) => (
                    <RoleContainer key={department.id} department={department} users={list} />
                ))}
        </Box>
    )
}
