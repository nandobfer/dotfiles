import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
const router = express.Router()
const prisma = new PrismaClient()

router.post("/", async (request: Request, response: Response) => {
    const data: { name: string; phone: string; mail: string; message: string } = request.body

    const html = `
    <div>
        <p>fsfgs<p>
        <p>dfgsdfg<p>
        <p>sdfg<p>
        <p>sfg<p>
    </div>
    `
})

export default router
