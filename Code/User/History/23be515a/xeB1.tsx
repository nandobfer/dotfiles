import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { socket } from "../../io"
import { useIo } from "../../hooks/useIo"
import { Container } from "../../components/Container"

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
                        <p>{room}</p>
                    </Container>
                ))}
            </Box>
        </Box>
    )
}
