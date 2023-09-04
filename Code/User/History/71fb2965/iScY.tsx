import { Route, Routes as ReactRoutes } from "react-router-dom"
import { Login } from "./pages/Login"
import { Home } from "./pages/Home"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <ReactRoutes>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
        </ReactRoutes>
    )
}
