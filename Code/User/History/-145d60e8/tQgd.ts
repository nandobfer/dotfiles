import { Socket } from "socket.io"
import { ClientBag } from "../../definitions/client"
import { PrismaClient } from "@prisma/client"
import { fetch } from "../prisma"

const prisma = new PrismaClient()

export const handleCrop = async (socket: Socket, clients: ClientBag, data: { login: string; password: string }) => {}
