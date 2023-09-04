import React, { useEffect } from "react"
import { Box, Button, IconButton, TextField } from "@mui/material"
import { socket } from "../../io"
import { useIo } from "../../hooks/useIo"
import { Container } from "../../components/Container"
import AddBoxIcon from "@mui/icons-material/AddBox"

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
                <Container>
                    <TextField />
                    <IconButton>
                        <AddBoxIcon />
                    </IconButton>
                </Container>
            </Box>
        </Box>
    )
}
