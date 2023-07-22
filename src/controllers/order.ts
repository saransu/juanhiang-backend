import { Request, Response } from 'express'
import { writeLog } from '../utils'
import { OrderRepository } from '../repositories'
import { OrderInterface as Interfaces } from '../interfaces'

const repo = new OrderRepository()

export class OrderController {
  getOrders = async (req: Request, res: Response) => {
    try {
      const { status } = req.query as Interfaces.GetOrdersQuery
      const data = await repo.getOrders({ status })

      return res.status(200).send({ data, message: 'get orders successfully' })
    } catch (err: any) {
      writeLog('ERROR', 'getOrders', err.message)
      return res.status(500).send({ error: err.message })
    }
  }

  postOrder = async (req: Request, res: Response) => {
    try {
      const { items } = req.body as Interfaces.PostOrderBody
      const order = {
        status: Interfaces.OrderStatus.IN_PROGRESS,
        createdAt: new Date(),
        items
      }      
      await repo.createOrder({ order })

      return res.status(201).send({ message: 'create order successfully' })
    } catch (err: any) {
      writeLog('ERROR', 'postOrder', err.message)
      return res.status(500).send({ error: err.message })
    }
  }
}