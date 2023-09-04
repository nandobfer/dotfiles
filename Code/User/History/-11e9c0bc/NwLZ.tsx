import { ConfirmDialogProvider } from "burgos-confirm"
import { SnackbarProvider } from "burgos-snackbar"

interface ProvidersProps {
    children: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <SnackbarProvider>
            <ConfirmDialogProvider>{children}</ConfirmDialogProvider>
        </SnackbarProvider>
    )
}
