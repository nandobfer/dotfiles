import React, { useEffect, useState } from "react"
import { Avatar, Box } from "@mui/material"
import { useImageUrl } from "../hooks/useImageUrl"
import { useCustomers } from "../hooks/useCustomers"

interface CustomerAvatarProps {
    customer: Customer
}

export const CustomerAvatar: React.FC<CustomerAvatarProps> = ({ customer }) => {
    const { getCustomerPic } = useImageUrl()
    const { customers } = useCustomers()

    const [url, setUrl] = useState(getCustomerPic(customer))

    useEffect(() => {
        setUrl((url) => `${url}?timestamp=${new Date().getTime()}`)
    }, [customer])

    return <Avatar src={url} sx={{ width: "5vw", height: "5vw" }} variant="rounded" />
}
