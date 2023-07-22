import { ItemInterface } from '../interfaces'
import { Item } from '../models'

export class ItemRepository {
  getAll = async (input: { type: ItemInterface.ItemType }) => {
    const { type } = input
    return Item.find({ type, status: ItemInterface.ItemStatus.IN_PROGRESS }).exec()
  } 
}