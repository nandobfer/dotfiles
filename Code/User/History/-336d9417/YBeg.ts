import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { sendMail } from "./scripts/mail"
import { getNumbers } from "./send_whatsapp"
const router = express.Router()
const prisma = new PrismaClient()

router.post("/", async (request: Request, response: Response) => {
    const data: { name: string; phone: string; mail: string; message: string } = request.body
    const [number, number2] = getNumbers(data.phone)

    const html = `
    <div>
        <p>Nome: ${data.name}<p>
        <p>Telefone: ${data.phone}<p>
        <p>E-mail: ${data.mail}<p>
        <p>Mensagem: ${data.message}<p>
    </div>
    `

    const mail = await sendMail("cooperativa@sionenergia.com.br", "Novo contato pelo site", JSON.stringify(data, null, 4), html)
    response.json(mail)
})

export default router