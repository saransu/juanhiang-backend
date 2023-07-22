import { isNil } from 'lodash'
import { Order } from '../models'

export class OrderRepository {
  getOrders = async (input: { status?: 'IN_PROGRESS' | 'DONE' | 'CANCEL' }) => {
    const { status } = input
    const where: { status?: 'IN_PROGRESS' | 'DONE' | 'CANCEL'} = {}
    if (!isNil(status))
      where.status = status
    return Order.find(where).exec()
  }
}