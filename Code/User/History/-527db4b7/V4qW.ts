import express, { Express, Request, Response } from "express"
import { getIoInstance } from "../io/socket"
import databaseHandler from "../databaseHandler"
const router = express.Router()
const prisma = databaseHandler

router.get("/", async (request: Request, response: Response) => {
    response.json({ test: "success" })
})

router.post("/login", async (request: Request, response: Response) => {
    const data = request.body

    const user = prisma.user.login(data)
    response.json(user)
})

router.post("/delete", async (request: Request, response: Response) => {
    const io = getIoInstance()
    const data = request.body

    const user = prisma.user.delete(data)

    response.json(user)
    io.emit("user:delete", user)
})

export default router
