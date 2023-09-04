import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
const router = express.Router()

router.use("/service", service)

export default router
