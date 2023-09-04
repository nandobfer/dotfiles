import React, { useState, useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useSearch } from "../../hooks/useSearch"
import { useUser } from "../../hooks/useUser"
import normalize from "../../tools/normalize"
import { Paper } from "@mui/material"
import { UserList } from "../Admin/Users/UserList"
import { Profile } from "../Profile"

interface UsersProps {
    user: User
}

export const Users: React.FC<UsersProps> = ({ user }) => {
    const navigate = useNavigate()

    const { setOnSearch } = useSearch()
    const { list } = useUser()

    const [userList, setUserList] = useState(list)

    const handleSearch = (value: string) => {
        const result = list.filter((user) => normalize(user.name).includes(value))
        setUserList(result)
    }

    useEffect(() => {
        setUserList(list)
        setOnSearch(() => handleSearch, "usuários")
    }, [list])

    return (
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
                        <UserList list={userList} />
                    </Paper>
                }
            />
            <Route path="/:username" element={<Profile user={user} admin />} />
        </Routes>
    )
}
