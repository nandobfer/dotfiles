import { Socket } from "socket.io"
import { ClientBag } from "../definitions/client"
import whatsapp from "../chat/whatsapp"

const zap = whatsapp

const sync = async (socket: Socket, clients: ClientBag) => {
    const ready = await zap.client.getState()
    if (ready) {
        socket.emit("zap:loading", zap.client.info)
        socket.emit("zap:ready", await zap.getClient())
    } else {
        const qrcode = await zap.getQrCode()
        console.log({ qrcode })

        socket.emit("zap:qrcode", qrcode)
    }
}

const getChat = async (_chat: any) => {
    const chatObj = zap.client.getChatById()
}

export default { sync, getChat }
