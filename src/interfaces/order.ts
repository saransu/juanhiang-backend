import { CreateItemInput } from './item'

export enum OrderStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  CANCEL = 'CANCEL',
}

export interface GetOrdersQuery {
  status?: OrderStatus
}

export interface PostOrderBody {
  items: CreateItemInput[]
}

export interface PostStatusBody {
  status: OrderStatus
}