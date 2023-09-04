import express, { Express, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import databaseHandler from '../databaseHandler'

const router = express.Router()
const prisma = databaseHandler

router.post('/username', async (request:Request, response:Response) => {    
    const data = request.body

    const user = prisma.user.

})

export default router