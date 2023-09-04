import { createContext, useEffect, useState } from "react"
import React from "react"
import { useIo } from "../hooks/useIo"

interface UserContextValue {
    user: User | null
    setUser: (user: User | null) => void

    list: User[]
    addUser: (user: User) => void

    connectedList: User[]

    connected: boolean

    drawer: {
        open: boolean
        setOpen: (open: boolean) => void
    }

    logs: {
        status: StatusLog[]
    }
}

interface UserProviderProps {
    children: React.ReactNode
}

const UserContext = createContext<UserContextValue>({} as UserContextValue)

export default UserContext

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const io = useIo()

    const [user, setUser] = useState<User | null>(null)
    const [list, setList] = useState<User[]>([])
    const [connectedList, setconnectedList] = useState<User[]>([])
    const [openDrawer, setOpenDrawer] = useState(false)
    const [connected, setConnected] = useState(false)
    const [statusLogs, setStatusLogs] = useState<StatusLog[]>([])

    const drawer = {
        open: openDrawer,
        setOpen: setOpenDrawer,
    }

    const logs = {
        status: statusLogs,
    }

    const addUser = (user: User) => {
        setList((prevList) => [...prevList.filter((item) => item.id != user.id), user])
    }

    const addConnectedUser = (user: User) => {
        setconnectedList((prevList) => [...prevList.filter((item) => item.id != user.id), user])
    }

    useEffect(() => {
        io.on("status")
    }, [statusLogs])

    useEffect(() => {
        console.log({ connectedList })
        io.on("user:connect", (user) => {
            console.log(`connected: ${user.username}`)
            addConnectedUser(user)
        })

        io.on("user:disconnect", (user) => {
            console.log(`disconnected: ${user.username}`)
            setconnectedList(connectedList.filter((item) => item.id != user.id))
        })

        io.on("user:status:update", (user) => {
            addConnectedUser(user)
        })

        return () => {
            io.off("user:connect")
            io.off("user:disconnect")
            io.off("user:status:update")
        }
    }, [connectedList])

    useEffect(() => {
        console.log({ list })

        io.on("user:update", (user) => {
            addUser(user)
        })

        io.on("user:new", (user) => {
            addUser(user)
        })

        io.on("user:sync", (user) => {
            setList((prevList) => [...prevList.filter((item) => item.id != user.id), user])
        })

        io.on("user:delete", (user) => {
            setList((prevList) => prevList.filter((item) => item.id != user.id))
        })

        return () => {
            io.off("user:sync")
            io.off("user:update")
            io.off("user:new")
            io.off("user:delete")
        }
    }, [list])

    useEffect(() => {
        console.log({ user })

        if (user) {
            io.on("connect", () => {
                console.log("reconnected, syncing user")
                io.emit("client:sync", user)
            })

            io.on("disconnect", () => {
                setConnected(false)
            })

            io.on("client:sync", (users: User[]) => {
                setConnected(true)
                setList(users)
            })

            io.on("connected:sync", (users: User[]) => {
                setconnectedList(users)
            })

            io.on("log:status:sync", (logs: StatusLog[]) => {
                setStatusLogs(logs)
            })
        }

        return () => {
            io.off("connect")
            io.off("disconnect")
            io.off("client:sync")
            io.off("connected:sync")
            io.off("log:status:sync")
        }
    }, [user])

    return <UserContext.Provider value={{ user, setUser, drawer, connected, list, connectedList, addUser, logs }}>{children}</UserContext.Provider>
}
