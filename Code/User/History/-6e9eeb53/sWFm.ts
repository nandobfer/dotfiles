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
    sold: number
    bought: number
    rating: number
    ratings: number
    date: string

    crops: Crop[]
    meediatedCrops: MediatedCrop[]
    chats: Chat[]
    messages: Message[]

    producer?: Producer
    business?: Business
    agent?: Agent
    shipping?: Shipping
}

interface UpdateUserValues {
    name: string
    email: string
    cpf: string
    birth: string
    phone: string
    rg: string
    address: string
    cep: string
    image: string
    number: string
    city: string
    district: string
    uf: string
}