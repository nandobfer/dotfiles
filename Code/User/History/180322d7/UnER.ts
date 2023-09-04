import { Socket } from "socket.io"
import { ClientBag } from "../definitions/client"
import whatsapp from "../chat/whatsapp"

const zap = whatsapp

const sync = async (socket: Socket, clients: ClientBag) => {
    const client = await zap.client.getState()
    if (client) {
    } else {
        console.log({ code: zap.getQrCode() })
        socket.emit("zap:qrcode", zap.getQrCode())
    }
}

export default { sync }
