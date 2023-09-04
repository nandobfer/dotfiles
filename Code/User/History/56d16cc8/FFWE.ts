import { Department } from "@prisma/client"
import databaseHandler from "../databaseHandler"
import { getIoInstance } from "./socket"

const prisma = databaseHandler

const update = async (data: Department) => {
    const io = getIoInstance()

    const customer = await prisma.department.update(data)
    if (customer) {
        io.emit("customer:update", customer)
    }
}

export default { update }
