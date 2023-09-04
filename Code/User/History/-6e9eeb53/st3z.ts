declare interface User {
    id: number
    document: string
    email: string
    name: string
    password: string

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
