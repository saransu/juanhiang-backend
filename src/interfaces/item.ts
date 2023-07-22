export const itemType = ['KITCHEN', 'DRINK'] as const

export type ItemType = typeof itemType[number]

export enum ItemStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface CreateItemInput {
  name: string
  options?: string
  type: 'KITCHEN' | 'DRINK'
  quantity: number
  image?: string
}

export interface GetAllQuery {
  type: ItemType
}