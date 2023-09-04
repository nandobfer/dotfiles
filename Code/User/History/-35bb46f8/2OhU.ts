declare interface Crop {
    id: number
    name: string
    description: string
    weight: number
    price: number

    producer: User
    mediated?: MediatedCrop

    rating: number
    date: string
    sold: number
}

declare interface MediatedCrop {
    id: number
    crop: Crop
    agent: User
}
