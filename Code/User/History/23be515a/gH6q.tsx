import React, { useEffect } from "react"
import { Box, Button, IconButton, TextField } from "@mui/material"
import { socket } from "../../io"
import { useIo } from "../../hooks/useIo"
import { Container } from "../../components/Container"
import AddCircleIcon from "@mui/icons-material/AddCircle"
import { Form, Formik } from "formik"
import { useUser } from "../../hooks/useUser"
import { useNavigate } from "react-router-dom"

interface RoomListProps {}

interface NewRoomForm {
    name: ""
}

export const RoomList: React.FC<RoomListProps> = ({}) => {
    const navigate = useNavigate()

    const { rooms } = useIo()
    const { user } = useUser()

    const newRoomValues: NewRoomForm = {
        name: "",
    }

    const handleNewRoomSubmuit = (values: NewRoomForm) => {
        rooms.new(values.name, user!)
    }

    useEffect(() => {
        rooms.refresh()
        if (!user) navigate("/")
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
                    <Box sx={{ gap: "1vw", flexDirection: "column" }}>
                        <Formik initialValues={newRoomValues} onSubmit={handleNewRoomSubmuit}>
                            {({ values, handleChange }) => (
                                <Form style={{ display: "contents" }}>
                                    <TextField variant="standard" name="name" value={values.name} onChange={handleChange} />
                                    <Button variant="outlined" type="submit">
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
