declare interface Subaccount {
    id: number
    active: boolean
    name: string
    document: string
    phone: string
    email: string
    image: string
    date: string
    userId: number
    user: User
    type?: string
}
