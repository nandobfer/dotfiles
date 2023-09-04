declare interface Chat {
    id: ContactId

    isGroup: boolean
    isMuted: boolean
    isReadOnly: boolean

    muteExpiration: number
    name: string
    pinned: boolean
    timestamp: number
    unreadCount: number

    lastMessage: {}
}

declare interface Message {
    body: string
    from: string
    fromMe: boolean
    hasMedia: boolean
}

declare interface MessageId {
    fromMe: boolean
    id: string
    remote: string
    _serialized: string
}

declare interface ContactId {
    server: string
    user: string
    _serialized: string
}
