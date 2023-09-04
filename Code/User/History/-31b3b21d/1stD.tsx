import { ConfirmDialog, ConfirmDialogProvider } from 'burgos-confirm'
import { Snackbar, SnackbarProvider } from 'burgos-snackbar'
import React from 'react'

interface ProvidersProps {
    
}

export const Providers:React.FC<ProvidersProps> = ({  }) => {
    
    return (
        <SnackbarProvider>
            <ConfirmDialogProvider>
                <IoProvider>
                    <UserProvider>
                        <UsersProvider>
                            <CropsProvider>
                                <BusinessesProvider>
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
                                </BusinessesProvider>
                            </CropsProvider>
                        </UsersProvider>
                    </UserProvider>
                </IoProvider>
            </ConfirmDialogProvider>
        </SnackbarProvider>
    )
}