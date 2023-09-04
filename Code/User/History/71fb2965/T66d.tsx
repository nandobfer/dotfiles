import { Route, Routes as ReactRoutes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { Signup } from "./pages/Signup"
import { Profile } from "./pages/Profile"
import { Search } from "./pages/Search"
import { useUser } from "./hooks/useUser"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    const { user } = useUser()

    return user ? (
        <ReactRoutes>
            <Route index element={<Home user={user} />} />
            <Route path="/*" element={<Home user={user} />} />
            <Route path="/home/*" element={<Home user={user} />} />
            <Route path="/producer/*" element={<Home user={user} />} />
            <Route path="/agent/*" element={<Home user={user} />} />
            <Route path="/business/*" element={<Home user={user} />} />
            <Route path="/shipping/*" element={<Home user={user} />} />
            <Route path="settings" element={<Home user={user} />} />
            <Route path="profile" element={<Profile user={user} />} />
            <Route path="search/*" element={<Search user={user} />} />
        </ReactRoutes>
    ) : (
        <ReactRoutes>
            <Route index element={<Login />} />
            <Route path="*" element={<Login />} />
            <Route path="signup" element={<Signup />} />
        </ReactRoutes>
    )
}
