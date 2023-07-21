import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
  status: { type: String, enum: ['IN_PROGRESS', 'DONE', 'CANCEL'], required: true, default: 'IN_PROGRESS' },
  createdAt: { type: Date, required: true, default: new Date() },
  updatedAt: { type: Date, required: false },
  items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
})

const model = mongoose.model('Order', schema)

export default model