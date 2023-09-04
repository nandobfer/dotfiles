import React from "react"
import { Box } from "@mui/material"

interface CropsProps {}

export const Crops: React.FC<CropsProps> = ({}) => {
    return <Box sx={{ flexDirection: "column", width: "100%", padding: "0 7vw" }}>
                <SearchInput placeholder={placeholder} />
                {list.map(item =>)}
            </Box>
}
