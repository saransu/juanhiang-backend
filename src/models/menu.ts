import mongoose, { Schema } from 'mongoose'

const schema = new Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: false },
  options: [{ type: Schema.Types.ObjectId, ref: 'Option' }],
  type: { type: String, required: true, enum: ['KITCHEN', 'DRINK'] },
})

const model = mongoose.model('Menu', schema)

export default model