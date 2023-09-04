import React, { useState } from "react"
import { Box, IconButton } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit"
import { useDarkMode } from "../../../hooks/useDarkMode"
import { useColors } from "../../../hooks/useColors"

interface DepartmentContainerProps {
    department: Department
}

export const DepartmentContainer: React.FC<DepartmentContainerProps> = ({ department }) => {
    const { darkMode } = useDarkMode()
    const colors = useColors()
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
            }}
            onMouseEnter={() => setMouseIn(true)}
            onMouseLeave={() => setMouseIn(false)}
        >
            {department.name}
            <IconButton color="primary">
                <EditIcon />
            </IconButton>
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
