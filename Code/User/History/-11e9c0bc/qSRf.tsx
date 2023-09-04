import { ConfirmDialog, ConfirmDialogProvider } from "burgos-confirm"
import { Snackbar, SnackbarProvider } from "burgos-snackbar"
import { IoProvider } from "../contexts/ioContext"
import { UserProvider } from "../contexts/userContext"
import { HeaderProvider } from "../contexts/headerContext"
import { MenuDrawer } from "./MenuDrawer"

interface ProvidersProps {
    children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <SnackbarProvider>
            <ConfirmDialogProvider>
                <IoProvider>
                    <UserProvider>
                        <HeaderProvider>
                            <MenuDrawer>
                                <Snackbar />
                                <ConfirmDialog />
                                {children}
                            </MenuDrawer>
                        </HeaderProvider>
                    </UserProvider>
                </IoProvider>
            </ConfirmDialogProvider>
        </SnackbarProvider>
    )
}
