import { Request, Response } from 'express'
import { writeLog } from '../utils'
import { OrderRepository } from '../repositories'
import { OrderInterface as Interfaces } from '../interfaces'
import io from '../app'

const repo = new OrderRepository()

export class OrderController {
  getOrders = async (req: Request, res: Response) => {
    try {
      const { status } = req.query as Interfaces.GetOrdersQuery
      const data = await repo.getAll({ status })

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

      if (items.some(i => i.type === 'KITCHEN'))
        io.serverSideEmit('kitchen_refresh')
      if (items.some(i => i.type === 'DRINK'))
        io.serverSideEmit('drink_refresh')

      return res.status(201).send({ message: 'create order successfully' })
    } catch (err: any) {
      writeLog('ERROR', 'postOrder', err.message)
      return res.status(500).send({ error: err.message })
    }
  }

  updateStatus = async (req: Request, res: Response) => {
    try {
      const { status } = req.body as Interfaces.PostStatusBody
      const id = req.params.id
      await repo.updateStatus({ id, status })

      return res.status(200).send({ message: 'update order status successfully' })
    } catch (err: any) {
      writeLog('ERROR', 'postStatus', err.message)
      return res.status(500).send({ error: err.message })
    }
  }
}