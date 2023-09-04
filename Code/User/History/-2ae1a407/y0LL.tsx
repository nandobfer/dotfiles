import React from "react"
import { Box } from "@mui/material"
import { ListTitle } from "../../components/ListTitle"

interface NearYouListProps {}

export const NearYouList: React.FC<NearYouListProps> = ({}) => {
    return (
        <Box sx={{ flexDirection: "column" }}>
            <ListTitle title="Perto de você" nextLocation="/" />
        </Box>
    )
}
