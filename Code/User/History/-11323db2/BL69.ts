declare interface User {
    id: number
    username: string
    email: string
    password: string
    name: string
    cpf: string
    birth: string
    phone: string
    status: number

    department: Department
    roles: Role[]
    qrcodes: Qr

    connected?: boolean
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
    phone: string
    birth: string
    departmentId: number
}