import React from "react"
import { Signup } from "./Signup"

interface BusinessProps {
    user: User
}

export const Business: React.FC<BusinessProps> = ({ user }) => {
    return user.business ? <></> : <Signup user={user}></Signup>
}
