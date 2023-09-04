declare interface GameClient {
    user: users
    player: Player
}

declare interface Client extends GameClient {
    connection: WebSocket | Socket
}

declare interface ClientListBag {
    get: (socket: Socket) => Client
    list: () => {
        player: Player
        user: users
    }[]
    add: (client: Client) => number
    remove: (client: Client) => void
}
