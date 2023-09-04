import React from "react"
import { Box, Paper } from "@mui/material"

interface CardProps {
    user?: User
    name: string
    username: string
    roles: Role[]
}

export const Card: React.FC<CardProps> = ({ name, username, roles, user }) => {
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
            }}
        >
            {isEditing ? (
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
                                ) : (
                                    <Avatar size={"12vw"} user={profile!} />
                                )}
                                <Box sx={{ flexDirection: "column", alignItems: "center", gap: "0.6vw" }}>
                                    <p style={{ fontWeight: "600", fontSize: "1.3vw", color: colors.secondary }}>{values.name}</p>
                                    <p style={{ fontSize: "1.0vw", color: colors.secondary }}>@{values.username}</p>
                                </Box>
                                <Box sx={{ flexDirection: "row", alignItems: "center", gap: "0.6vw", whiteSpace: "pre-wrap" }}>
                                    <Tag variant="" fontSize="0.7vw" name="Admin"></Tag>
                                    <Tag variant="" fontSize="0.7vw" name="Planejamento"></Tag>
                                    <Tag variant="" fontSize="0.7vw" name="Dev"></Tag>
                                </Box>
        </Paper>
    )
}
