import { Router } from 'express'
import { ItemController } from '../controllers'

const router = Router()
const controllers = new ItemController()

router
  .get('/', controllers.getAll)
  .patch('/:id', controllers.updateStatus)

export default router