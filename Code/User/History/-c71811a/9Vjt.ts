import express, { Express, Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
const router = express.Router()

router.post('/username', async (request:Request, response:Response) => {    
    const data = request.body

    

})

export default router