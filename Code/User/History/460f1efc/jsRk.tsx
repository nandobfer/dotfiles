import React from "react"
import { Paper } from "@mui/material"

interface ListTitleProps {
    title: string
    list: string
}

export const ListTitle: React.FC<ListTitleProps> = ({ title }) => {
    return (
        <Paper elevation={0} sx={{ justifyContent: "space-between", background: "transparent" }}>
            <p>{title}</p>
            <p>{"Ver todas >"}</p>
        </Paper>
    )
}
