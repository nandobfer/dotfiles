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
    rating: number
    ratings: number

    type?: string
}

declare type SubaccountType = "agent" | "business" | "producer" | "shipping" | "store" | "service" | "adm"