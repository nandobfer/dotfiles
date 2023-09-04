import React from 'react'
import WebView from 'react-electron-web-view'

interface AppProps {
    
}

export const App:React.FC<AppProps> = ({  }) => {
    
    return <webview style={{height: '100vh'}} src="https://app.agenciaboz.com.br" />
}