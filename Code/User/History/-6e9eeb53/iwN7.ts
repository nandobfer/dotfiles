declare interface User {
    id: number
    document: string
    username: string
    email: string
    name: string
    password: string

    adm: boolean
    producer: boolean
    agent: boolean
    business: boolean
    shipping: boolean
    sold: number
    bought: number
    rating: number
    date: string

    crops: Crop[]
    meediatedCrops: MediatedCrop[]
    chats: Chat[]
    messages: Message[]
}
