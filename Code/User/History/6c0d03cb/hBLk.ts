declare interface QrCode {
    id: number
    name: string
    code: string
}

declare interface QrCodeForm {
    name: string
    code: string
    customerId?: number
}
