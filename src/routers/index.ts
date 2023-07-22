import orderRouter from './order'
import itemRouter from './item'
import { Router } from 'express'

const router = Router()

router.use('/orders', orderRouter)
router.use('/items', itemRouter)

export default router