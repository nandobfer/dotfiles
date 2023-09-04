import React, { useState, useEffect } from "react"
import { Box, Paper } from "@mui/material"
import { RoleContainer, RoleSkeletons } from "./RoleContainer"
import { NewButton } from "../../../components/NewButton"
import { useDepartments } from "../../../hooks/useDepartments"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useSearch } from "../../../hooks/useSearch"
import { useUser } from "../../../hooks/useUser"
import AddIcon from "@mui/icons-material/Add"
import { Profile } from "../../Profile"
import normalize from "../../../tools/normalize"
import { UserList } from "./UserList"
import { backgroundStyle } from "../../../style/background"
import { Header } from "../../../components/Header"

interface UsersProps {
    user: User
}

export const Users: React.FC<UsersProps> = ({ user }) => {
    const navigate = useNavigate()

    const { setOnSearch } = useSearch()
    const { list } = useUser()

    const [userList, setUserList] = useState(list)

    const handleNewUserClick = () => {
        navigate("/admin/users/new")
    }

    const handleSearch = (value: string) => {
        const result = list.filter((user) => normalize(user.name).includes(value))
        setUserList(result)
    }

    useEffect(() => {
        setUserList(list)
        setOnSearch(() => handleSearch, "usuários")
    }, [list])

    return (
        <Box sx={backgroundStyle}>
            <Header user={user} />
            <Routes>
                <Route
                    index
                    element={
                        <Paper
                            elevation={0}
                            sx={{
                                padding: "1vw",
                                //width: "100%",
                                gap: "2vw",
                                flexWrap: "wrap",
                                backgroundColor: "background.default",
                                margin: "2vw 2vw 0 2vw",
                                height: "75vh",
                            }}
                        >
                            <NewButton
                                onClick={handleNewUserClick}
                                bottom={"2vw"}
                                right={"2vw"}
                                icon={<AddIcon sx={{ width: "100%", height: "100%" }} />}
                            />

                            <UserList list={userList} />
                        </Paper>
                    }
                />
                <Route path="/new" element={<Profile user={user} createOnly admin />} />
                <Route path="/:username" element={<Profile user={user} admin />} />
            </Routes>
        </Box>
    )
}
