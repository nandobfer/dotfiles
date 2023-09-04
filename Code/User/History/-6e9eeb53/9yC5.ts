declare interface User {
    id: number
    document: string
    username: string
    email: string
    name: string
    password: string

    birth?: string
    rg?: string
    phone?: string
    cep?: string
    address?: string
    city?: string
    district?: string
    number?: string
    image: string
    uf?: string

    adm: boolean
    producer: Produc
    shipping: boolean
    sold: number
    bought: number
    rating: number
    date: string

    crops: Crop[]
    meediatedCrops: MediatedCrop[]
    chats: Chat[]
    messages: Message[]

    business?: Business
    agent?: Agent
}
