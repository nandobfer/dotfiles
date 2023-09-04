import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface RedirectComponentProps {
    location: string
}

export const RedirectComponent: React.FC<RedirectComponentProps> = ({ location }) => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate(location)
    }, [])

    return <></>
}
