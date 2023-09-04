import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { ThemeProvider } from "@mui/material"

function App() {
    const theme = useMuiTheme()

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
