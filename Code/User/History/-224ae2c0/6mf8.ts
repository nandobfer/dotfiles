declare interface Chat {
    id: number
    channel: string
    users: User[]
    messages: Message[]
}

declare interface Message {
    id: number
}
