import React from "react"
import { Box, Paper, Skeleton, alpha, lighten } from "@mui/material"
import { Avatar } from "../../components/Avatar"
import { Tag } from "../../components/Tag"
import { Avatar as AvatarUpload } from "@files-ui/react"
import { useColors } from "../../hooks/useColors"
import { useDarkMode } from "../../hooks/useDarkMode"

interface CardProps {
    user?: User
    name: string
    username: string
    roles: Role[]
    loading?: boolean
    image?: File
    setImage?: (file: File) => void
}

export const Card: React.FC<CardProps> = ({ name, username, roles, user, image, setImage, loading }) => {
    const colors = useColors()
    const { darkMode } = useDarkMode()

    return (
        <Paper
            elevation={3}
            sx={{
                width: "25%",
                padding: "8vw 3vw",
                flexDirection: "column",
                alignItems: "center",
                gap: "2vw",
                borderRadius: "0.2vw 0 0 2vw ",
                bgcolor: "background.paper",
                color: "secondary.main",
            }}
        >
            {!user ? (
                image &&
                setImage && (
                    <AvatarUpload
                        src={image}
                        onChange={(file) => setImage(file)}
                        smartImgFit={"orientation"}
                        changeLabel="trocar a imagem"
                        emptyLabel="enviar imagem"
                        // style={{ width: "100%", height: "30vw" }}
                        style={{
                            width: "12vw",
                            height: "12vw",
                            borderRadius: "20vw",
                            fontSize: "1.0vw",
                        }}
                    />
                )
            ) : loading ? (
                <Skeleton
                    variant="circular"
                    animation="wave"
                    sx={{ width: "12vw", height: "12vw", bgcolor: darkMode ? "" : lighten(colors.primary, 0.15) }}
                />
            ) : (
                <Avatar size={"12vw"} user={user} />
            )}
            <Box sx={{ flexDirection: "column", alignItems: "center", gap: "0.6vw" }}>
                <p style={{ fontWeight: "600", fontSize: "1.3vw", color: "secondary.main" }}>{name}</p>
                <p style={{ fontSize: "1.0vw", color: "secondary.main" }}>@{username}</p>
            </Box>
            <Box sx={{ flexDirection: "row", alignItems: "center", gap: "0.6vw", whiteSpace: "pre-wrap" }}>
                {roles.map((role) => (
                    <Tag key={role.id} name={role.tag} sx={{ fontSize: "0.7vw" }} />
                ))}
            </Box>
        </Paper>
    )
}
