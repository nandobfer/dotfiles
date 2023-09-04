import { Client, LocalAuth } from "whatsapp-web.js"
import { getIoInstance } from "../io/socket"

let qrCode = ""
let qrCodeResolver: (value: string) => void

const qrCodePromise = new Promise((resolve) => {
    qrCodeResolver = resolve
})

const getQrCode = () => qrCodePromise

const getClient = async () => {
    const info = client.info
    const chats = await client.getChats()

    return { info, chats }
}

const client = new Client({
    authStrategy: new LocalAuth({ dataPath: "whatsapp.auth" }),
    puppeteer: {
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
})

client.on("qr", (qr) => {
    qrCode = qr
    qrCodeResolver(qrCode)
    console.log("whatsapp is disconnected. QrCode ready: " + qrCode)
    // qrcode.generate(qr, { small: true })

    const io = getIoInstance()
    io.emit("zap:qrcode", qrCode)
})

client.on("ready", async () => {
    console.log("whatsapp client is ready")
    const io = getIoInstance()

    const chats = await client.getChats()

    io.emit("zap:ready", chats)
})

export default { getQrCode, getClient }
