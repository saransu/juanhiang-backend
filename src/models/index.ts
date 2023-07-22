import mongoose from 'mongoose'
import Option from './option'
import Menu from './menu'
import Item from './item'
import Order from './order'
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