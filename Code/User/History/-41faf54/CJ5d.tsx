import React, { useState } from "react"
import { Avatar, Box } from "@mui/material"
import { useImageUrl } from "../hooks/useImageUrl"

interface CustomerAvatarProps {
    customer: Customer
}

export const CustomerAvatar: React.FC<CustomerAvatarProps> = ({ customer }) => {
    const { getCustomerPic } = useImageUrl()

    const [url, setUrl] = useState(getCustomerPic(customer))

    return <Avatar src={getCustomerPic(url)} sx={{ width: "5vw", height: "5vw" }} variant="rounded" />
}
