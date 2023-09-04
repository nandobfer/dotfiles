import qrcode from "qrcode-terminal"
import { Client, LocalAuth } from "whatsapp-web.js"
import { getIoInstance } from "./io/socket"

export let whatsappQrCode = ""

export const whatsapp = new Client({
    authStrategy: new LocalAuth({ dataPath: "whatsapp.auth" }),
    puppeteer: {
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
})

whatsapp.on("qr", (qr) => {
    whatsappQrCode = qr
    // qrcode.generate(qr, { small: true })
    const io = getIoInstance()
    io.emit("zap:qrcode", qr)
})

whatsapp.on("ready", () => {
    console.log("whatsapp client is ready")
    const io = getIoInstance()
    io.emit("")
})

whatsapp.on("auth_failure", (message) => {
    console.log(`fail: ${message}`)
})