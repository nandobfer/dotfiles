import React from "react"
import { Paper } from "@mui/material"

interface ListTitleProps {
    title: string

    list: Crop[]
}

export const ListTitle: React.FC<ListTitleProps> = ({ title, list }) => {
    return (
        <Paper elevation={0} sx={{ justifyContent: "space-between", background: "transparent" }}>
            <p>{title}</p>
            <p>{"Ver todas >"}</p>
        </Paper>
    )
}
