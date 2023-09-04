declare interface NavigationMenu {
    id: number
    title: string
    location: string

    navigation?: {
        id: number
        title: string
        location: string
        icon: JSX.Element
    }[]

    hidden?: boolean
}
