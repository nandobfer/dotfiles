declare interface Chat {
    id: {
        server: string
        user: string
        _serialized: string
    }

    isGroup: boolean
    isMuted: boolean
    isReadOnly: boolean

    muteExpiration: number
    name: string
    pinned: boolean
    timestamp: number
    unreadCount: number

    lastMessage: Message
}

declare interface Message {
    id: {
        fromMe: boolean
        id: string
        remote: string
        _serialized: string
    }

    body: string
    from: string
    fromMe: boolean
    hasMedia: boolean
    timestamp: number
    to: string
}
