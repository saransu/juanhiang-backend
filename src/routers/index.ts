import orderRouter from './order'
import { Router } from 'express'

const router = Router()

router.use('/orders', orderRouter)

export default router