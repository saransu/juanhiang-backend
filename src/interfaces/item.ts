export interface CreateItemInput {
  name: string
  options?: string
  type: 'KITCHEN' | 'DRINK'
  quantity: number
  image?: string
}