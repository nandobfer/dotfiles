import React, { useState } from "react"
import { Box, Tab, Tabs } from "@mui/material"
import { Header } from "../../components/Header"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { Users } from "./Users"
import { tabStyle } from "../../style/tab"
import { useAdminTabs } from "../../hooks/useAdminTabs"
import { Customers } from "./Customers"
import { Profile } from "./Users/Profile"
import { Deparments } from "./Departments"

interface AdminProps {
    user: User
}

export const Admin: React.FC<AdminProps> = ({ user }) => {
    const navigate = useNavigate()
    const tabs = useAdminTabs()
    const path = useLocation().pathname
    console.log(path.split("/admin")[1])
    const initialTab = tabs.find((item) => item.id == Number(path.split("/admin")[1]))
    console.log(initialTab)

    const [tab, setTab] = useState(initialTab || 1)

    const handleTabChange = (id: number) => {
        setTab(id)

        const tab = tabs.find((tab) => tab.id == id)
        tab?.onClick()
    }

    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100vw",
                height: "100vh",
                bgcolor: "background.default",
                overflow: "hidden",
            }}
        >
            <Header user={user} />
            <Tabs value={tab} onChange={(_, id) => handleTabChange(id)} centered variant="fullWidth">
                {tabs.map((tab) => {
                    const Icon = () => tab.icon
                    return <Tab key={tab.id} label={tab.name} value={tab.id} sx={tabStyle} icon={<Icon />} />
                })}
            </Tabs>
            <Routes>
                <Route index element={<Users user={user} />} />
                <Route path="/users/*" element={<Users user={user} />} />
                <Route path="/customers/*" element={<Customers user={user} />} />
                <Route path="/departments/*" element={<Deparments user={user} />} />
            </Routes>
        </Box>
    )
}
