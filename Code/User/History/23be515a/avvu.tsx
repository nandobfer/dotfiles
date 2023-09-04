import React, { useEffect } from "react"
import { Box, Button, IconButton, TextField } from "@mui/material"
import { socket } from "../../io"
import { useIo } from "../../hooks/useIo"
import { Container } from "../../components/Container"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import { Form, Formik } from "formik"

interface RoomListProps {}

interface NewRoomForm {
    name: ""
}

export const RoomList: React.FC<RoomListProps> = ({}) => {
    const { rooms } = useIo()

    const newRoomValues: NewRoomForm = {
        name: "",
    }

    const handleNewRoomSubmuit = (values: NewRoomForm) => {
        rooms.new
    }

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
                    <Box sx={{ gap: "1vw" }}>
                        <Formik>
                            {({ values, handleChange }) => (
                                <Form>
                                    <TextField variant="standard" />
                                    <Button variant="outlined">
                                        <AddCircleIcon /> new
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}
