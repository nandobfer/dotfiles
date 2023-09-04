import React, { useState } from "react"
import { Box, IconButton, darken, lighten } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import { useDarkMode } from "../../../hooks/useDarkMode"
import { useColors } from "../../../hooks/useColors"
import { useUser } from "../../../hooks/useUser"

interface DepartmentContainerProps {
    department: Department
}

export const DepartmentContainer: React.FC<DepartmentContainerProps> = ({ department }) => {
    const colors = useColors()

    const { darkMode } = useDarkMode()
    const { list } = useUser()
    const users = list.filter((user) => user.department.id == department.id)

    const [mouseIn, setMouseIn] = useState(false)

    return (
        <Box
            key={department.id}
            sx={{
                width: "21.5vw",
                borderRadius: "1vw",
                borderBottom: "2px solid",
                padding: "1vw",
                justifyContent: "space-between",
                alignItems: "center",
                position: "relative",
            }}
            onMouseEnter={() => setMouseIn(true)}
            onMouseLeave={() => setMouseIn(false)}
        >
            {department.name}
            {mouseIn && (
                <IconButton color="primary" sx={{ width: "2vw", height: "2vw", margin: 0 }}>
                    <EditIcon />
                </IconButton>
            )}
            <Box
                sx={{
                    padding: "0.5vw",
                    borderRadius: "50%",
                    fontSize: "0.7vw",
                    minWidth: "1.5vw",
                    height: "1.5vw",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "secondary.main",
                    bgcolor: darkMode ? darken(colors.primary, 0.5) : lighten(colors.primary, 0.4),
                }}
            >
                {users.length}
            </Box>
        </Box>
    )
}
