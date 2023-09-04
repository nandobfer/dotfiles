import express, { Express, Request, Response } from "express"
import service from "./service"
import { getIoInstance } from "../io/socket"
import databaseHandler from "../databaseHandler"

const router = express.Router()
const prisma = databaseHandler

router.post("/new", async (request: Request, response: Response) => {
    const io = getIoInstance()

    const data = request.body

    const service = await prisma.customer.new(data)
    if (service) {
        io.emit("service:new", service)
        response.json(service)
    }
})

router.use("/service", service)

export default router