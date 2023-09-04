import { Socket } from "socket.io"
import { ClientBag } from "../../definitions/client"
import { Business, PrismaClient } from "@prisma/client"
import { fetch } from "../prisma"
import { business } from "../business"

export const handleBusiness = async (socket: Socket, data: Business & { file: File }) => {
    console.log(data)
    
    business.new(data)
}
