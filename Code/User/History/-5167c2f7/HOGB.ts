import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const prismaHandler = () => {
    const fetch = {
        crops: (callback: Function) =>
            prisma.crop
                .findMany({ include: { producer: true, mediated: { include: { agent: true } }, categories: true } })
                .then((result) => console.log(result)),
    }
}
