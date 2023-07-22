import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
  name: { type: String, required: true },
  options: { type: String, required: false },
  type: { type: String, required: true, enum: ['KITCHEN', 'DRINK'] },
  quantity: { type: Number, required: true },
  image: { type: String, required: false },
  order: { Type: Schema.Types.ObjectId, ref: 'Order' },
  status: { type: String, enum: ['IN_PROGRESS', 'DONE'], required: true, default: 'IN_PROGRESS' },
  createdAt: { type: Date, required: true, default: new Date() },
  updatedAt: { type: Date, required: false },
})

const model = mongoose.model('Item', schema)

export default model