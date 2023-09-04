import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const prismaHandler = () => {
    const fetch = {
        crops: prisma.crop,
    }
}
