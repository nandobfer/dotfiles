import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from "./pages/Login"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { ThemeProvider } from "@mui/material"
import { Providers } from "./components/Providers"

function App() {
    const theme = useMuiTheme()

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Providers>
                    <Routes>
                        <Route index element={<Login />} />
                    </Routes>
                </Providers>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
