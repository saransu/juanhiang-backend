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
}