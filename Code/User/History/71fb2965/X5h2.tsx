import { Route, Routes as ReactRoutes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { Signup } from "./pages/Signup"
import { Profile } from "./pages/Profile"
import { Search } from "./pages/Search"
import { useUser } from "./hooks/useUser"
import { Business } from "./pages/Business"
import { Agent } from "./pages/Agent"
import { Adm } from "./pages/Adm"
import { Shipping } from "./pages/Shipping"
import { Producer } from "./pages/Producer"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    const { user } = useUser()

    return user ? (
        <ReactRoutes>
            <Route index element={user.adm ? <Adm user={user} /> : <Home user={user} />} />
            <Route path="/*" element={user.adm ? <Adm user={user} /> : <Home user={user} />} />
            <Route path="/home/*" element={<Home user={user} />} />
            <Route path="/adm/*" element={<Adm user={user} />} />
            <Route path="/producer/*" element={<Producer user={user} />} />
            <Route path="/agent/*" element={<Agent user={user} />} />
            <Route path="/business/*" element={<Business user={user} />} />
            <Route path="/shipping/*" element={<Shipping user={user} />} />
            <Route path="settings" element={<Home user={user} />} />
            <Route path="profile/*" element={<Profile user={user} />} />
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
