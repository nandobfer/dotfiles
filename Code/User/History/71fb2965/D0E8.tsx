import { Route, Routes as ReactRoutes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"
import { Signup } from "./pages/Signup"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <ReactRoutes>
            <Route index element={<Home />} />
            <Route path="/home/*" element={<Home />} />
            <Route path="/producer/*" element={<Home />} />
            <Route path="/agent/*" element={<Home />} />
            <Route path="/business/*" element={<Home />} />
            <Route path="/shipping/*" element={<Home />} />
            <Route path="settings" element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
        </ReactRoutes>
    )
}
