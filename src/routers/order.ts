import { OrderController } from '../controllers'
import { Router } from 'express'

const router = Router()
const controllers = new OrderController()

router.get('/', controllers.getOrders)

export default router