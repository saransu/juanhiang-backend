import { OrderController } from '../controllers'
import { Router } from 'express'

const router = Router()
const controllers = new OrderController()

router
  .get('/', controllers.getOrders)
  .post('/', controllers.postOrder)
  .patch('/:id', controllers.updateStatus)

export default router