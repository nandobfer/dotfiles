declare interface NavigationMenu {
    id: number
    title: string
    location: string

    navigation?: {
        id: number
        title: string
        location: string
        icon: React.ReactElement
    }[]

    hidden?: boolean
}
