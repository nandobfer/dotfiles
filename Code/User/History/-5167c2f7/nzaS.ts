import { Category, Chat, Crop, PrismaClient, User } from "@prisma/client"

const prisma = new PrismaClient()

export const include = {
    crops: { producer: true, mediated: { include: { agent: true } }, categories: true },
    chats: { messages: true, users: true },
    categories: {},
}

export const fetch = {
    crops: {
        list: (callback: (crops: Crop[]) => void) => prisma.crop.findMany({ include: include.crops }).then((result) => callback(result)),
        id: (id: string | number, callback: (crops: Crop | null) => void) =>
            prisma.crop.findUnique({ where: { id: Number(id) }, include: include.crops }).then((result) => callback(result)),
    },
    chats: {
        user: (user: User, callback: (crops: Chat[]) => void) =>
            prisma.chat.findMany({ where: { users: { some: { id: user.id } } }, include: include.chats }).then((result) => callback(result)),
    },
    categories: {
        list: (callback: (categories: Category[]) => void) =>
            prisma.category.findMany({ include: include.categories }).then((result) => callback(result)),
    },
    user: {
        login: async (data: { login: string; password: string }) => {
            await prisma.user.findFirst({
                where: { OR: [{ document: data.login }, { email: data.login }, { username: data.login }], AND: { password: data.password } },
                include: {
                    crops: { include: { mediated: true } },
                    mediatedCrops: { include: { crop: { include: { producer: true } } } },
                    chats: { include: { users: true, messages: { include: { user: true } } } },
                },
            }),
    },
        }
            
}
