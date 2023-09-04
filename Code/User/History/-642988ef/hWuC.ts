import { contracts } from "@prisma/client"
import { Socket } from "socket.io"
import log from "./log"

export const handleContracts = (socket: Socket) => {
    socket.on("contract:new", (contract: contracts) => {
        console.log(contract)
        socket.broadcast.emit("contract:new", contract)
        log(`Usuário ${seller.username} atualizado`, user_id)
    })

    socket.on("contract:update", (contract: contracts) => {
        console.log(contract)
        socket.broadcast.emit("contract:update", contract)
    })

    socket.on("contract:remove", (contract: contracts) => {
        console.log(contract)
        socket.broadcast.emit("contract:remove", contract)
    })
}
