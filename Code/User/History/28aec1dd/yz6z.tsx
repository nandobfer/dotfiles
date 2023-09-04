import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { ThemeProvider } from "@mui/material"
import { Providers } from "./Providers"
import { Routes } from "./Routes"
import { DarkModeProvider } from "./contexts/darkModeContext"

function App() {
    const theme = useMuiTheme()

    return (
        <DarkModeProvider>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Providers>
                        <Routes />
                    </Providers>
                </BrowserRouter>
            </ThemeProvider>
        </DarkModeProvider>
    )
}

export default App
