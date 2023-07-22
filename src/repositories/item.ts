import { ItemInterface } from '../interfaces'
import { Item } from '../models'

export class ItemRepository {
  getAll = async (input: { type: ItemInterface.ItemType }) => {
    const { type } = input
    return Item.find({ type, status: ItemInterface.ItemStatus.IN_PROGRESS }).exec()
  }

  updateStatus = async (input: { id: string }) => {
    const { id } = input
    return Item.findByIdAndUpdate(id, { status: ItemInterface.ItemStatus.DONE, updatedAt: new Date() }).exec()
  }
}