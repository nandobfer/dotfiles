import React from "react"
import { Badge, Avatar as MuiAvatar, SxProps } from "@mui/material"
import { useUser } from "../hooks/useUser"

interface AvatarProps {
    user?: User | null
    sx?: SxProps
    size: string | number
}

export const Avatar: React.FC<AvatarProps> = ({ user, sx, size }) => {
    const { connected } = useUser()

    return (
        <Badge badgeContent={""} color={connected ? "success" : "error"} sx={{ width: size, height: size }} overlap="circular">
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
