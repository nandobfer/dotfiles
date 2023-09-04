import { Crop, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const fetch = {
    crops: (callback: (crops: Crop[]) => void) =>
        prisma.crop
            .findMany({ include: { producer: true, mediated: { include: { agent: true } }, categories: true } })
            .then((result) => callback(result)),
}
