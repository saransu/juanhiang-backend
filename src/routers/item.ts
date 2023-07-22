import { Router } from 'express'
import { ItemController } from '../controllers'

const router = Router()
const controllers = new ItemController()

router
  .get('/', controllers.getAll)

export default router