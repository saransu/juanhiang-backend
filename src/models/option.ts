import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
  menu: { type: Schema.Types.ObjectId, ref: 'Menu' },
  name: { type: String, required: true }
})

const model = mongoose.model('Option', schema)

export default model