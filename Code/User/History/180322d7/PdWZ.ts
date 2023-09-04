import { Socket } from "socket.io"
import { ClientBag } from "../definitions/client"
import whatsapp from "../chat/whatsapp"

const zap = whatsapp

const sync = async (socket: Socket, clients: ClientBag) => {
    const client = await zap.client.getState()
    if (client) {
    } else {
        console.log(zap.qrCode)
        socket.emit("zap:qrcode", zap.qrCode)
    }
}

export default { sync }
