import { Socket } from "socket.io"
import { handleBoards } from "./boards"
import { handleUsers } from "./users"
import { handleStatuses } from "./statuses"
import { handleContracts } from "./contracts"

const prisma = new PrismaClient()

const log = () => {
    await prisma.userLogs.create({
        data: {
            date: new Date(),
            text: `Usuário ${seller.username} atualizado`,
            user_id: user.id,
        },
    })
}

export const handleSocket = (socket: Socket) => {
    console.log(`new connection: ${socket.id}`)

    socket.on("disconnect", () => {
        console.log(`disconnected: ${socket.id}`)
    })

    handleBoards(socket)
    handleUsers(socket)
    handleStatuses(socket)
    handleContracts(socket)
}
