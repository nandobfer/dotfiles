declare interface Category {
    id: number
    name: string
}

declare interface CropCategory extends Category {
    crops: Crop[]
}
