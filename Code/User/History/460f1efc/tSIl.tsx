import React from "react"
import { Paper } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface ListTitleProps {
    title: string
    placeholder: string
    list: Crop[]
}

export const ListTitle: React.FC<ListTitleProps> = ({ title, list, placeholder }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/search", { state: { list, placeholder } })
    }

    return (
        <Paper elevation={0} sx={{ justifyContent: "space-between", background: "transparent" }}>
            <p>{title}</p>
            <p onClick={handleClick}>{"Ver todas >"}</p>
        </Paper>
    )
}
