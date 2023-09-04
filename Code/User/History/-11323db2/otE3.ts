declare interface User {
    id: number
    username: string
    email: string
    password: string
    name: string

    roles: Role[]
}

interface LoginForm {
    login: string
    password: string
}

interface UserForm {
    username: string
    email: string
    name: string

    cpf: string
    birth: string
    role: number
}