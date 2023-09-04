import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
const router = express.Router()
const prisma = new PrismaClient()

router.post("/login", async (request: Request, response: Response) => {
    const data = request.body

    const user = await prisma.user.findFirst({
        where: {
            OR: [{ email: data.login }, { username: data.login }],
            AND: { password: data.password },
        },
    })
})

export default router
