declare interface GameClient {
    user: users
    player: Player
}

declare interface Client extends GameClient {
    connection: WebSocket | Socket
}
