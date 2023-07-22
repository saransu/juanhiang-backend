import mongoose from 'mongoose'
import Order from './order'
import Item from './item'
import Menu from './menu'
import Option from './option'
import { isNil } from 'lodash'

export {
  Order,
  Item,
  Menu,
  Option,
}

const connectDB = async () => {
  const { DB_URL } = process.env
  if (isNil(DB_URL))
    throw new Error('connectDB failed: missing DB_URL')
  return mongoose.connect(DB_URL)
}

export default connectDB