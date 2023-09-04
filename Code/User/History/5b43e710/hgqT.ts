import express, { Express, Request, Response } from "express"
import databaseHandler from "../databaseHandler"

const router = express.Router()
const prisma = databaseHandler

router.post("/new", async (request: Request, response: Response) => {
    const data = request.body
})

export default router
