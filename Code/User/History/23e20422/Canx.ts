import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
const router = express.Router()
const prisma = new PrismaClient()

router.post("/new", async (request: Request, response: Response) => {
    const data = request.body
})

router.use("/role", role)

export default router
