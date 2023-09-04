declare interface Menu {
    id: number
    name: string
    path: string
    icon: React.ReactElement
    onClick: () => void

    submenus?: Menu[]
}
