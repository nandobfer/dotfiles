import express, { Express, Request, Response } from "express"
const router = express.Router()
const prisma = databaseHandler

router.post("/new", async (request: Request, response: Response) => {
    const data = request.body
})

export default router
