import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const log = async (text: string, id: number) => {
    await prisma.userLogs.create({
        data: {
            date: new Date(),
            text: text,
            user_id: id,
        },
    })
}
