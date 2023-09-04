declare interface NavigationMenu {
    id: number
    title: string
    location: string

    navigation?: {
        id: number
        title: string
        location: string
        icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
            muiName: string
        }
    }[]

    hidden?: boolean
}
