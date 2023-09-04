import { createContext, useEffect, useState } from "react"
import React from "react"

interface UserContextValue {
    user: User | null
    setUser: (user: User | null) => void

    drawer: {
        open: boolean
        setOpen: (open: boolean) => void
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
    const [openDrawer, setOpenDrawer] = useState(false)

    const drawer = {
        open: openDrawer,
        setOpen: setOpenDrawer,
    }

    useEffect(() => {
        console.log({ user })

        if (user) {
            io.on("user:update", (data: User) => {
                if (user.id == data.id) {
                    setUser({ ...data, image: `${data.image}?time=${new Date().getTime()}` })
                    navigate("/profile")
                    setUpdateLoading(false)
                    setEditing(false)
                    snackbar({ severity: "success", text: "Dados alterados com sucesso!" })
                }
            })

            io.on("connect", () => {
                console.log("reconnected, syncing user")
                io.emit("client:sync", user)
            })
        }

        return () => {
            io.off("user:update")
        }
    }, [user])

    return <UserContext.Provider value={{ user, setUser, drawer }}>{children}</UserContext.Provider>
}
