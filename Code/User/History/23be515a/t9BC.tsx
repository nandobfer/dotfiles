import React, { useEffect } from "react"
import { Box, Button, IconButton, TextField } from "@mui/material"
import { socket } from "../../io"
import { useIo } from "../../hooks/useIo"
import { Container } from "../../components/Container"
import AddCircleIcon from "@mui/icons-material/AddCircle"

interface RoomListProps {}

export const RoomList: React.FC<RoomListProps> = ({}) => {
    const { rooms } = useIo()

    useEffect(() => {
        rooms.refresh()
    }, [])

    return (
        <Box sx={{}}>
            <Box>
                {rooms.list?.map((room) => (
                    <Container key={room.id}>
                        <p>{room.name}</p>
                        <p>{room.clients.length} / 4</p>
                    </Container>
                ))}
                <Container sx={{ width: "100%" }}>
                    <Box sx={{ gap: "1vw", width: "100%" }}>
                        <TextField />
                        <IconButton>
                            <AddCircleIcon />
                        </IconButton>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}
