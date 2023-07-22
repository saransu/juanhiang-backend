import { isNil } from 'lodash'
import { Item, Order } from '../models'
import { ItemInterface, OrderInterface } from '../interfaces'

export class OrderRepository {
  getAll = async (input: { status?: OrderInterface.OrderStatus }) => {
    const { status } = input
    const where: { status?: OrderInterface.OrderStatus } = {}
    if (!isNil(status))
      where.status = status
    return Order.find(where).populate('items').exec()
  }

  createOrder = async (input: { order: { status: OrderInterface.OrderStatus, createdAt: Date, items: ItemInterface.CreateItemInput[] } }) => {
    const { order } = input
    const items = await Promise.all(order.items.map(async v => {
      const item = new Item(v)
      await item.save()
      return item
    }))
    const model = new Order({ ...order, items })
    return model.save()
  }

  updateStatus = async (input: { id: string, status: OrderInterface.OrderStatus }) => {
    const { id, status } = input
    return Order.findByIdAndUpdate(id, { status, updatedAt: new Date() })
  }
}