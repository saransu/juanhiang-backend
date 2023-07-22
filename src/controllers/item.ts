import { Request, Response } from 'express'
import { writeLog } from '../utils'
import { ItemInterface as Interfaces } from '../interfaces'
import { ItemRepository } from '../repositories'

const repo = new ItemRepository()

export class ItemController {
  getAll = async (req: Request, res: Response) => {
    try {
      const { type } = req.query as unknown as Interfaces.GetAllQuery
      const data = await repo.getAll({ type })

      return res.status(200).send({ data, message: 'get all items successfully' })
    } catch (err: any) {
      writeLog('ERROR', 'getAllItems', err.message)
      return res.status(500).send({ error: err.message })
    }
  }

  updateStatus = async (req: Request, res: Response) => {
    try {
      const id = req.params.id
      await repo.updateStatus({ id })

      return res.status(200).send({ message: 'update item status successfully' })
    } catch (err: any) {
      writeLog('ERROR', 'updateItemStatus', err.message)
      return res.status(500).send({ error: err.message })
    }
  }
}