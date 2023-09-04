declare interface Chat {
    id: number
    channel: string
    users: User[]
    messages: Message[]
}

declare interface Message {
    id: number
    text: string
    chat: Chat
    user: User
}
