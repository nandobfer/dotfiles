declare interface Zap {
    connected: boolean
    info: any
    chats: Chat[]
}

declare interface Info {
    me: {}
    pushname: string
    wid: ContactId
}
