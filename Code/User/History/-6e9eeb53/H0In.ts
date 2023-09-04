declare interface User {
    id: number
    document: string
    email: string
    name: string
    password: string

    crops: Crop[]
}
