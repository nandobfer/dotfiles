import { useSnackbar } from "burgos-snackbar"
import { createContext, useState } from "react"
import React from "react"
import { Socket, io as ioSocket } from "socket.io-client"

interface IoContextValue {
    io: Socket
}

interface IoProviderProps {
    children: React.ReactNode
}

const IoContext = createContext<IoContextValue>({} as IoContextValue)

export default IoContext

const io = ioSocket("ws://192.168.15.3:4104")
// const io = ioSocket("wss://app.agenciaboz.com.br:4104")

export const IoProvider: React.FC<IoProviderProps> = ({ children }) => {
    const { snackbar } = useSnackbar()

    io.once("connect_error", () => {
        snackbar({ severity: "error", text: "Não foi possível se conectar com o servidor, verifique sua conexão com a internet" })
    })

    io.on("connect", () => {
        snackbar({ severity: "success", text: "Conectado com o servidor" })
    })

    io.on("disconnect", (reason) => {
        if (reason == "io client disconnect" || reason == "io server disconnect") {
            snackbar({ severity: "info", text: "Desconectado do servidor" })
        } else {
            snackbar({ severity: "error", text: "Conexão com o servidor perdida! Tentando reconectar automaticamente" })
        }
    })

    return <IoContext.Provider value={{ io }}>{children}</IoContext.Provider>
}
