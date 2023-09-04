declare interface Zap {
    connected: boolean
    info: any
    chats: Chat[]
}

declare interface Info {
    me: ContactId
    pushname: string
}
