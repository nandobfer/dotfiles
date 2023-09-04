declare interface GameRoom {
    id: number
    name: string
    client: GameClient
}

declare interface Room extends GameRoom {
    client: Client
}
