import { Route, Routes as ReactRoutes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    const { user } = useUser()

    return user ? (
        <ReactRoutes>
            <Route index element={<Home user={user} />} />
            <Route path="/*" element={<Home user={user} />} />
            <Route path="/home/*" element={<Home user={user} />} />
        </ReactRoutes>
    ) : (
        <ReactRoutes>
            <Route index element={<Login />} />
            <Route path="*" element={<Login />} />
            {/* <Route path="signup" element={<Signup />} /> */}
        </ReactRoutes>
    )
}
