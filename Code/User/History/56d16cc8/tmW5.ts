import { Department } from "@prisma/client"
import databaseHandler from "../databaseHandler"
import { getIoInstance } from "./socket"

const prisma = databaseHandler

const update = async (data: Department) => {
    const io = getIoInstance()

    const department = await prisma.department.update(data)
    if (department) {
        io.emit("department:update", department)
    }
}

export default { update }
