import React from "react"
import { Badge, Avatar as MuiAvatar, SxProps } from "@mui/material"

interface AvatarProps {
    user?: User | null
    sx?: SxProps
    size: string | number
}

export const Avatar: React.FC<AvatarProps> = ({ user, sx, size }) => {
    return (
        <Badge badgeContent={""} color="error" sx={{ width: size, height: size }} overlap="circular">
            <MuiAvatar
                src={`https://app.agenciaboz.com.br:4105/${user?.id}`}
                sx={{
                    color: "primary.main",
                    backgroundColor: "background.default",
                    width: size,
                    height: size,
                    ...sx,
                }}
            />
        </Badge>
    )
}
