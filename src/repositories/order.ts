import { isNil } from 'lodash'
import { Order } from '../models'
import { ItemInterface, OrderInterface } from '../interfaces'

export class OrderRepository {
  getOrders = async (input: { status?: OrderInterface.OrderStatus }) => {
    const { status } = input
    const where: { status?: OrderInterface.OrderStatus } = {}
    if (!isNil(status))
      where.status = status
    return Order.find(where).exec()
  }

  createOrder = async (input: { order: { status: OrderInterface.OrderStatus, createdAt: Date, items: ItemInterface.CreateItemInput[] } }) => {
    const { order } = input
    const model = new Order(order)
    return model.save()
  }
}