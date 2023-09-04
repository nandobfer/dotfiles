import React, { useEffect } from "react"
import { Box } from "@mui/material"
import { socket } from "../../io"
import { useIo } from "../../hooks/useIo"

interface RoomListProps {}

export const RoomList: React.FC<RoomListProps> = ({}) => {
    const { rooms } = useIo()

    useEffect(() => {
        rooms.get()
    }, [])

    return <Box sx={{}}></Box>
}
