import { ConfirmDialog, ConfirmDialogProvider } from 'burgos-confirm'
import { Snackbar, SnackbarProvider } from 'burgos-snackbar'
import React from 'react'
import { IoProvider } from '../contexts/ioContext'

interface ProvidersProps {
    
}

export const Providers:React.FC<ProvidersProps> = ({  }) => {
    
    return (
        <SnackbarProvider>
            <ConfirmDialogProvider>
                <IoProvider>
                                                    <Snackbar />
                                                    <ConfirmDialog />
                                                    {children}
                </IoProvider>
            </ConfirmDialogProvider>
        </SnackbarProvider>
    )
}