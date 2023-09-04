import { Socket } from "socket.io"
import { ClientBag } from "../definitions/client"
import whatsapp from "../chat/whatsapp"

const zap = whatsapp

const sync = async (socket: Socket, clients: ClientBag) => {
    const ready = await zap.client.getState()
    if (ready) {
        const info = zap.client.info
        const chats = await zap.client.getChats()
        
        socket.emit("zap:ready", { chats, info })
    } else {
        const qrcode = await zap.getQrCode()
        console.log({ qrcode })

        socket.emit("zap:qrcode", qrcode)
    }
}

export default { sync }
