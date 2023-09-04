import { ConfirmDialog, ConfirmDialogProvider } from "burgos-confirm"
import { Snackbar, SnackbarProvider } from "burgos-snackbar"

interface ProvidersProps {
    children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <SnackbarProvider>
            <ConfirmDialogProvider>
                <Snackbar />
                <ConfirmDialog />
                {children}
            </ConfirmDialogProvider>
        </SnackbarProvider>
    )
}
