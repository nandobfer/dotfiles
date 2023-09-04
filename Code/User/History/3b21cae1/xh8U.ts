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

    lastMessage: {}
}
