import { SxProps, Theme } from "@mui/material"

declare interface NavigationMenu {
    id: number
    title: string
    location: string

    navigation?: {
        id: number
        title: string
        location: string
        icon: React.ComponentType<SxProps<Theme>>
    }[]

    hidden?: boolean
}
