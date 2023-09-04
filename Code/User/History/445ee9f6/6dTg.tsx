import React from 'react'
import {AlertColor, Box, Paper, SxProps} from '@mui/material'

interface StatusCircleProps {
    sx?: SxProps
    color: AlertColor
}

export const StatusCircle:React.FC<StatusCircleProps> = ({ sx, color }) => {

    const sx = {
        ...sx,
        width: "1vw", height: "1vw", borderRadius: "100%" backgroundColor: `${qrcode ? "error.main" : "success.main"}`
    }
    
    return (
        <Paper sx={sx} />
    )
}