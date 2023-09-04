import React from "react"

interface BusinessProps {
    user: User
}

export const Business: React.FC<BusinessProps> = ({ user }) => {
    return user.business ? <></> : <></>
}
