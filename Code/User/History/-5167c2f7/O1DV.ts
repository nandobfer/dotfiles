import { Crop, PrismaClient, User } from "@prisma/client"

const prisma = new PrismaClient()

export const fetch = {
    crops: {
        list: (callback: (crops: Crop[]) => void) =>
            prisma.crop
                .findMany({ include: { producer: true, mediated: { include: { agent: true } }, categories: true } })
                .then((result) => callback(result)),
        id: (id: string | number, callback: (crops: Crop | null) => void) =>
            prisma.crop
                .findUnique({ where: { id: Number(id) }, include: { producer: true, mediated: { include: { agent: true } }, categories: true } })
                .then((result) => callback(result)),
    },
    chats: {
        user: (callback: (user: User, crops: Crop[]) => void) =>
            prisma.chat
                .findMany({ where: { users: { some: { id: user.id } } }, include: { messages: true, users: true } })
                .then((result) => callback(result)),
        id: (id: string | number, callback: (crops: Crop | null) => void) =>
            prisma.crop
                .findUnique({ where: { id: Number(id) }, include: { producer: true, mediated: { include: { agent: true } }, categories: true } })
                .then((result) => callback(result)),
    },
}
