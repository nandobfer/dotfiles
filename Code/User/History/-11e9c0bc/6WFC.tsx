import { ConfirmDialog, ConfirmDialogProvider } from "burgos-confirm"
import { Snackbar, SnackbarProvider } from "burgos-snackbar"
import { IoProvider } from "../contexts/ioContext"
import { UserProvider } from "../contexts/userContext"
import { HeaderProvider } from "../contexts/headerContext"
import { MenuDrawerProvider } from "../contexts/menuDrawerContext"
import { MenuDrawer } from "./MenuDrawer"
import { NotificationsProvider } from "../contexts/notificationsContext"
import { Notifications } from "./Notifications"
import { CropsProvider } from "../contexts/cropsContext"
import { ChatsProvider } from "../contexts/chatsContext"

interface ProvidersProps {
    children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <SnackbarProvider>
            <ConfirmDialogProvider>
                <IoProvider>
                    <UserProvider>
                        <CropsProvider>
                            <ChatsProvider>
                                <HeaderProvider>
                                    <MenuDrawerProvider>
                                        <NotificationsProvider>
                                            <Snackbar />
                                            <ConfirmDialog />
                                            <MenuDrawer />
                                            <Notifications />
                                            {children}
                                        </NotificationsProvider>
                                    </MenuDrawerProvider>
                                </HeaderProvider>
                            </ChatsProvider>
                        </CropsProvider>
                    </UserProvider>
                </IoProvider>
            </ConfirmDialogProvider>
        </SnackbarProvider>
    )
}
