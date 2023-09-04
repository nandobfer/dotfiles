import React from "react"
import { Box, useMediaQuery } from "@mui/material"
import { RoleContainer, RoleSkeletons } from "./RoleContainer"
import { useDepartments } from "../../../hooks/useDepartments"
import { useUser } from "../../../hooks/useUser"

interface UserListProps {
    list: User[]
}

export const UserList: React.FC<UserListProps> = ({ list }) => {
    const isMobile = useMediaQuery('(orientation: portrait)')
    const { departments, loading } = useDepartments()
    const { connectedList } = useUser()

    return loading ? (
        <RoleSkeletons />
    ) : (
        <Box
            sx={{
                flexDirection: isMobile ? "column" : "row",
                // flexWrap: "wrap",
                height: "100%",
                width: "100%",
                padding: isMobile ? "8vw 0 18vw 0" : "",
                overflowX: isMobile ? "hidden" : "auto",
                overflowY: isMobile ? "auto" :  "hidden",

                "::-webkit-scrollbar-thumb": {
                    bgcolor: "primary.main",
                    borderRadius: "1vw",
                },
            }}
            >
                <NewButton
                            onClick={handleNewUserClick}
                            bottom={"2vw"}
                            right={"2vw"}
                            icon={<AddIcon sx={{ width: "100%", height: "100%" }} />}
                        />
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
