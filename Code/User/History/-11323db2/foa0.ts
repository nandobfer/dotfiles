declare interface User {
    id: number
    username: string
    email: string
    password: string
    name: string
    
    roles: User[]
}