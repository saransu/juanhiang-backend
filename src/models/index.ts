import mongoose from 'mongoose'
import Order from './order'
import { isNil } from 'lodash'

export {
  Order,
}

const connectDB = async () => {
  const { DB_URL } = process.env
  if (isNil(DB_URL))
    throw new Error('connectDB failed: missing DB_URL')
  return mongoose.connect(DB_URL)
}

export default connectDB